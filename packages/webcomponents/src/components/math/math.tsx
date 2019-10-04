import { Component, Prop, Element, Event, EventEmitter } from "@stencil/core";
import katex from "katex";
import "katex/dist/contrib/mhchem.min";
import AsciiMathParser from "asciimath2tex";

@Component({
  tag: "pyro-math",
  styleUrl: "math.css"
})
export class Math {
  @Prop() expression: string = "";
  @Prop() inline: boolean = false;
  @Prop() asciiMath: boolean = false;

  @Event() injectProps: EventEmitter;

  @Element() el: HTMLElement;

  asciiMathParser = new AsciiMathParser();

  connectedCallback() {
    this.injectProps.emit(this);
  }

  componentDidLoad() {
    const expression = this.asciiMath
      ? this.asciiMathParser.parse(this.expression)
      : this.expression;
    katex.render(expression, this.el, { displayMode: !this.inline });
  }
}
