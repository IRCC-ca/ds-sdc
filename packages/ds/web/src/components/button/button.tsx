/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, Element, h, Prop } from '@stencil/core';

interface buttonConfig {
  category: string;
  size: string;
}

@Component({
  tag: 'djl-button',
})
export class DjlButton {
  /** (optional) Disabled attribute for <button> element */
  @Prop() disabled?: boolean;

  /** (optional) Name attribute for <button> element */
  @Prop() name?: string;

  /** (optional) Color attribute for <button> element*/
  @Prop() color?: 'critical' | 'CTA';

  /** (optional) Types for <button> element */
  @Prop() type?: 'button' | 'submit' | 'reset';

  /** (optional)  Value for <button> element */
  @Prop() value?: string;

  /** (optional) Category for <button> custom element */
  @Prop() category?: 'primary' | 'secondary' | 'plain';

  /** (optional) Size for <button> custom element */
  @Prop() size?: 'small' | 'large';

  /** (optional) aria-label for <button> element */
  @Prop({ attribute: 'aria-label' }) ariaLabelBtn?: string;

  // eslint-disable-next-line @stencil/element-type
  @Element() el: HTMLElement;

  componentDidLoad() {
    // eslint-disable-next-line no-console
    console.log('component is loading...', this.el);
    // console.log(`size att ${this.el.getAttribute('size')}`);
    // console.log(`category ${this.el.getAttribute('category')}`);
  }

  // set the config for button specific element to be set on the app side
  private config: buttonConfig = {
    category: this.category,
    size: this.size,
  };

  // solution for adding attribute: https://stackoverflow.com/questions/31273093/how-to-add-custom-html-attributes-in-jsx
  render() {
    return (
      <button
        aria-label={this.ariaLabelBtn}
        name={this.name}
        {...this.config}
        value={this.value}
        disabled={this.disabled}
        aria-disabled={this.disabled ? 'true' : null}
        type={this.type}
        color={this.color}
      >
        <slot />
      </button>
      // <button {...{ category: this.category, size: this.size }} disabled={this.disabled} aria-disabled={this.disabled ? 'true' : null} type={this.type} color={this.color}>
      //   {this.label}
      // </button>
    );
  }
}
