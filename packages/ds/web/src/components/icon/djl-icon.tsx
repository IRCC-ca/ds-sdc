import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';

export interface IconConfig {
  unicode: string;
  fontFamily: 'fa-solid' | 'fa-thin' | 'fa-light' | 'fa-regular' | 'fa-brands';
  ariaLabel?: string;
}

@Component({
  tag: 'djl-icon',
  styleUrl: 'djl-icon.scss',
  shadow: true
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DjlIcon {
  // eslint-disable-next-line
  @Element() el: HTMLElement;

  /**
   * Icon config json object, or parsable json string
   * @example
   * ```
   * {
   *    unicode : 'f6b0',
   *    fontFamily : 'fa-solid'
   * }
   * ```
   * @example
   * ```
   * '{"unicode": "f6b0", "fontFamily": "fa-solid"}'
   * ```
   **/
  @Prop({mutable: true}) iconConfig: IconConfig | string;

  componentWillLoad() {
    if (this.iconConfig !== undefined) {
      this.iconConfigHandler(this.iconConfig);
    }
  }

  @Watch('iconConfig')
  iconConfigHandler(newValue: IconConfig | string) {
    if (typeof newValue === 'string') {
      this.iconConfig = JSON.parse(newValue);
    }
    this.el.style.setProperty('--font-unicode', this.formattedIcon())
  }

  /** CSS --font-unicode override for <djl-icon> element **/
  // eslint-disable-next-line
  formattedIcon(): string {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return "'" + '\\' + this.iconConfig?.unicode + "'";
  }

  // eslint-disable-next-line
  isHidden(): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.iconConfig?.ariaLabel === '';
  }

  render() {
    const fontFamily = typeof this.iconConfig === 'object' ? this.iconConfig?.fontFamily : '';
    const className = 'font-icon ' + fontFamily;

    return (
      <Host>
        <span
          class={className}
          aria-hidden={this.isHidden()}
          aria-label={typeof this.iconConfig === 'object' ? this.iconConfig?.ariaLabel : ''}
        ></span>
      </Host>
    );
  }
}
