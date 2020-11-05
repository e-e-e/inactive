const Reactless = {
  createElement: <
    T extends keyof JSX.IntrinsicElements,
    K extends keyof JSX.IntrinsicElements[T]
  >(
    type: T,
    props?: JSX.IntrinsicElements[T],
    ...children: JSX.Children[]
  ): JSX.ReactlessChildElements[T] | null => {
    const element = document.createElement(type);
    if (props) {
      Object.keys(props).forEach((key: string) => {
        console.log(element[key as K]);
        element[key as K] = props[key as K] as any;
      });
    }
    children.forEach((child) => {
      child && element.append(child);
    });
    return element;
  },
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
    export type Children =
      | HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
      | string
      | null;
    export type ReactlessChildElements = HTMLElementTagNameMap;
    export type IntrinsicElements = OptionalValues<HTMLElementTagNameMap>;
  }
}
