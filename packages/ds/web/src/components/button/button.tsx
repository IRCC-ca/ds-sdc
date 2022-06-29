/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, h, Prop } from '@stencil/core';

interface buttonConfig {
  category: string;
  size: string;
}

@Component({
  tag: 'web-button',
})
export class DjlButton {
  /** (optional) Disabled attribute for <button> element */
  @Prop() disabled: boolean;

  /** (optional) Name attribute for <button> element */
  @Prop() name?: string;

  /** (optional) Color attribute for <button> element*/
  @Prop() color?: 'critical' | 'CTA';

  /** (optional) Types for <button> element */
  @Prop() type?: 'button' | 'submit' | 'reset';

  /** (optional)  Value for <button> element */
  @Prop() value?: string;

  /** (optional) Category for <button> custom element */
  @Prop({ reflect: true }) category?: 'primary' | 'secondary' | 'plain' = 'primary';

  /** (optional) Size for <button> custom element */
  @Prop({ reflect: true }) size?: 'small' | 'large' = 'large';

  /** (optional) aria-label for <button> element */
  @Prop() ariaLabelBtn?: string;

  /** Button label */
  @Prop() label: string;

  // set the config for button specific element to be set on the app side
  private config: buttonConfig = {
    category: this.category,
    size: this.size,
  };

  render() {
    return (
      <button
        name={this.name}
        {...this.config}
        value={this.value}
        disabled={this.disabled}
        aria-disabled={this.disabled ? 'true' : null}
        type={this.type}
        color={this.color}
        aria-label={this.ariaLabelBtn}
      >
        {this.label}
      </button>
    );
  }
}
