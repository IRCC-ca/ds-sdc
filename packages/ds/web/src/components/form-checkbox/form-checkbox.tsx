import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'djl-form-checkbox',
  styleUrl: 'form-checkbox.scss',
  shadow: true,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DjlFormCheckbox {
  @Prop() size?: 'small' | 'large';

  @Prop() ariaLabel?: string;

  @Prop() disabled?: boolean;

  render() {
    return (
      <Host>
        <input type="checkbox">
          <slot/>
        </input>
      </Host>
    );
  }

}
