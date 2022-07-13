/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, h, Prop } from '@stencil/core';

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

  // set the config for button specific element to be set on the app side
  private config: buttonConfig = {
    category: this.category,
    size: this.size,
  };

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
    );
  }
}
