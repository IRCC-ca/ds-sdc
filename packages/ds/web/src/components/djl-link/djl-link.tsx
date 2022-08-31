import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'djl-link',
  styleUrl: 'djl-link.css',
  shadow: true,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DjlLink {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
