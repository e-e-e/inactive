import * as CSS from 'csstype';
import { ReactlessEventHandlers } from './events';

type ReactlessProps = Record<string, any> & { children?: JSX.Children };
type ReactlessComponent = (props: ReactlessProps) => JSX.Element;

const refMap = new WeakMap<Node, ReactlessRef>();

// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

function isReactlessComponent<T extends keyof JSX.IntrinsicElements>(
  type: T | ReactlessComponent
): type is ReactlessComponent {
  return isFunction(type);
}

const callback: MutationCallback = function (mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      mutation.removedNodes.forEach((node) => {
        const ref = refMap.get(node);
        refMap.delete(node);
        if (ref) ref.current = null;
      });
    }
  }
};

function mount(root: Element, element: JSX.Child): Node | null {
  if (!element) return null;
  if (typeof element === 'string') {
    return root.appendChild(document.createTextNode(element));
  }
  const observer = new MutationObserver(callback);
  observer.observe(root, { childList: true, subtree: true });
  return root.appendChild(element);
}

function createElement(
  type: ReactlessComponent,
  props?: ReactlessProps,
  ...children: JSX.Child[]
): JSX.Child;
function createElement<
  T extends keyof JSX.IntrinsicElements,
  K extends keyof JSX.IntrinsicElements[T]
>(
  type: T | ReactlessComponent,
  props?: JSX.IntrinsicElements[T],
  ...children: JSX.Children[]
): HTMLElementTagNameMap[T];
function createElement<
  T extends keyof JSX.IntrinsicElements,
  K extends keyof JSX.IntrinsicElements[T]
>(
  type: T | ReactlessComponent,
  props?: JSX.IntrinsicElements[T],
  ...children: JSX.Children[]
): HTMLElementTagNameMap[T] | JSX.Child {
  if (isReactlessComponent(type)) {
    return type({ ...props, children } as ReactlessProps);
  }
  const element = document.createElement(type);
  if (props) {
    Object.keys(props).forEach((key: string) => {
      setProp(element, key, props[key as K]);
    });
  }
  children.forEach((child) => {
    if (Array.isArray(child)) {
      child.forEach((c) => c && element.append(c));
    } else {
      child && element.append(child);
    }
  });
  return element;
}

function setProp(element: Element, key: string, value: any) {
  if (key === 'ref') {
    refMap.set(element, value);
    value.current = element;
  } else if (key === 'style') {
    const style = getStyleText(value);
    element.setAttribute('style', style);
  } else if (key === 'className') {
    element.setAttribute('class', value);
  } else if (key.startsWith('on')) {
    (element as any)[key.toLowerCase()] = value;
  } else if (key in element) {
    (element as any)[key] = value;
  } else {
    element.setAttribute(key, value);
  }
}

function getStyleText(styles: CSS.Properties<string | number>): string {
  return Object.keys(styles).reduce((acc: string, key: string) => {
    const value = styles[key as keyof CSS.Properties];
    return value == null
      ? acc
      : `${acc} ${toKababCase(key)}: ${valueToUnitString(key, value)};`;
  }, '');
}

function valueToUnitString(key: string, value: string | number) {
  return value && typeof value === 'number' ? `${value}px` : value;
}

function toKababCase(str: string): string {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? A
  : B;

type MethodKeys<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [P in keyof T]: T[P] extends Function | null ? P : never;
}[keyof T];

type ReadonlyKeys<T> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    never,
    P
  >;
}[keyof T];

type KeepStyles<T> = T extends ElementCSSInlineStyle
  ? Omit<T, 'style'> & { style: CSS.Properties<string | number> }
  : T;

type OmitReadonlyAndMethods<T> = Omit<T, ReadonlyKeys<T> | MethodKeys<T>>;

type ReactlessElementProps = {
  ref: ReactlessRef;
} & ReactlessEventHandlers;

type OptionalValues<T> = {
  [K in keyof T]: Partial<
    OmitReadonlyAndMethods<KeepStyles<T[K]>> & ReactlessElementProps
  >;
};

type ReactlessRef<T extends Element = Element> = {
  current: T | null;
};

declare global {
  namespace JSX {
    export type Element =
      | HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
      | null;
    export type Child = Element | string;
    export type Children = Child | Child[];
    export type ReactlessChildElements = HTMLElementTagNameMap;
    export type DefaultIntrinsicElementMap = OptionalValues<
      HTMLElementTagNameMap
    >;
    export type IntrinsicElements = OptionalValues<HTMLElementTagNameMap>;
  }
}

function createRef(): ReactlessRef {
  return { current: null };
}

const Reactless = {
  createElement,
  mount,
  createRef,
};

export default Reactless;
