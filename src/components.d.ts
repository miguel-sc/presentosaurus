/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PyroCode {
    'language': string;
    'src': string;
  }
  interface PyroPresentation {
    'author': string;
    'numbering': boolean;
    'presentationTitle': string;
    'subtitle': string;
  }
  interface PyroSlide {
    'slideTitle': string;
  }
}

declare global {


  interface HTMLPyroCodeElement extends Components.PyroCode, HTMLStencilElement {}
  var HTMLPyroCodeElement: {
    prototype: HTMLPyroCodeElement;
    new (): HTMLPyroCodeElement;
  };

  interface HTMLPyroPresentationElement extends Components.PyroPresentation, HTMLStencilElement {}
  var HTMLPyroPresentationElement: {
    prototype: HTMLPyroPresentationElement;
    new (): HTMLPyroPresentationElement;
  };

  interface HTMLPyroSlideElement extends Components.PyroSlide, HTMLStencilElement {}
  var HTMLPyroSlideElement: {
    prototype: HTMLPyroSlideElement;
    new (): HTMLPyroSlideElement;
  };
  interface HTMLElementTagNameMap {
    'pyro-code': HTMLPyroCodeElement;
    'pyro-presentation': HTMLPyroPresentationElement;
    'pyro-slide': HTMLPyroSlideElement;
  }
}

declare namespace LocalJSX {
  interface PyroCode extends JSXBase.HTMLAttributes<HTMLPyroCodeElement> {
    'language'?: string;
    'src'?: string;
  }
  interface PyroPresentation extends JSXBase.HTMLAttributes<HTMLPyroPresentationElement> {
    'author'?: string;
    'numbering'?: boolean;
    'presentationTitle'?: string;
    'subtitle'?: string;
  }
  interface PyroSlide extends JSXBase.HTMLAttributes<HTMLPyroSlideElement> {
    'slideTitle'?: string;
  }

  interface IntrinsicElements {
    'pyro-code': PyroCode;
    'pyro-presentation': PyroPresentation;
    'pyro-slide': PyroSlide;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


