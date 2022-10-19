import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'djl-footer',
  styleUrl: 'djl-footer.scss',
  shadow: true,
  assetsDirs: ['../../core/assets'],
})
export class DjlFooter {
  @State() theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  componentDidLoad() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.theme = e.matches ? 'dark' : 'light';
    });
  }

  render() {
    return [
      <hr />,
      <footer class="footing">
        <div class="grid-container">
          <div class="item1 body3">
            <slot />
          </div>
          {this.theme === 'light' ? <img class="item2" src="assets/canada_govt_logo_light.svg" /> : <img class="item2" src="assets/canada_govt_logo_dark.svg" />}
        </div>
      </footer>,
    ];
  }
}
