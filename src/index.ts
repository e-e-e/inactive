type ReactlessProps = Record<string, any>;
type ReactlessComponent = (props: ReactlessProps) => JSX.Child;

function isReactlessComponent<T extends keyof JSX.IntrinsicElements>(
  type: T | ReactlessComponent
): type is ReactlessComponent {
  return !(typeof type === 'string');
}

function createElement(
  type: ReactlessComponent,
  props?: ReactlessProps,
  ...children: JSX.Children[]
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
    return type(props as ReactlessProps);
  }
  const element = document.createElement(type);
  if (props) {
    Object.keys(props).forEach((key: string) => {
      console.log(element[key as K]);
      element[key as K] = props[key as K] as any;
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

const Reactless = {
  createElement,
};

type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? A
  : B;

type MethodKeys<T> = {
  [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

type ReadonlyKeys<T> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    never,
    P
  >;
}[keyof T];

type OmitReadonlyAndMethods<T> = Omit<T, ReadonlyKeys<T> | MethodKeys<T>>;

export default Reactless;
type OptionalValues<T> = {
  [K in keyof T]: Partial<OmitReadonlyAndMethods<T[K]>>;
};

declare global {
  namespace JSX {
    export type Child =
      | HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
      | string
      | null;
    export type Children = Child | Child[];
    export type ReactlessChildElements = HTMLElementTagNameMap;
    export type IntrinsicElements = OptionalValues<HTMLElementTagNameMap>;
  }
}
