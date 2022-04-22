/* eslint-disable */
export namespace Components {
  interface MyComponent {
    /**
     * The first name
     */
    first: string;
    /**
     * The last name
     */
    last: string;
    /**
     * The middle name
     */
    middle: string;
    theme: string;
  }
}
declare global {
  interface HTMLElementTagNameMap {}
}
declare namespace LocalJSX {
  interface MyComponent {
    /**
     * The first name
     */
    first?: string;
    /**
     * The last name
     */
    last?: string;
    /**
     * The middle name
     */
    middle?: string;
    theme?: string;
  }
  interface IntrinsicElements {}
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {}
  }
}
