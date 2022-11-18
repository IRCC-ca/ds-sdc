import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'djl-header',
  styleUrl: 'djl-header.scss',
  shadow: true,
  assetsDirs: ['../../core/assets'],
})
export class DjlHeader {
  @State() theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  componentDidLoad() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.theme = e.matches ? 'dark' : 'light';
    });
  }

  render() {
    return (
      <header class="heading">
        <div class="grid-container">
          {this.theme === 'light' ? <img src="assets/canada_govt_logo_light.svg" /> : <img src="assets/canada_govt_logo_dark.svg" />}
          <div class="item2">
            <slot />
          </div>
        </div>
        <hr class="headerLine" />
      </header>
    );
  }
}
