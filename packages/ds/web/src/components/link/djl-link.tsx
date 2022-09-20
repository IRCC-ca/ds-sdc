import { Component, Host, Prop, State, h } from '@stencil/core';
import {IconConfig} from "../icon/djl-icon";

@Component({
  tag: 'djl-link',
  styleUrl: 'djl-link.scss',
  shadow: true,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DjlLink {
  /**
   * If developer is specifying a download in the href, they need to specify a download name in order for the "download icon" to appear next to it
   */
  @Prop() download?: string;

  @Prop() href!: string;

  @Prop() target?: '_blank' | '_parent' | '_self' | '_top';

  @Prop() ariaLabel: string;

  @State() linkIconConfig!: IconConfig;

  getIcon(): string[] {
    if (this.download) {
      return ['f56d', 'fa-solid'];
    } else {
      switch (this.href?.substring(0, 4)) {
        case 'http':
          return ['f08e', 'fa-regular'];
        case 'mail':
          return ['f0e0', 'fa-solid'];
        case 'tel:':
          return ['f095', 'fa-solid'];
        default:
          return ['', ''];
      }
    }
  }

  buildIconConfig() {
    const iconConfig = this.getIcon();
    this.linkIconConfig = {
      unicode: iconConfig[0],
      fontFamily: iconConfig[1],
    } as IconConfig;
  }

  hasIcon(): boolean {
    const href_head = this.href?.substring(0, 4);
    if (
      this.download !== undefined ||
      href_head === 'http' ||
      href_head === 'mail' ||
      href_head === 'tel:'
    ) {
      this.buildIconConfig();
      return true;
    } else {
      return false;
    }
  }

  isHidden(): boolean {
    return this.ariaLabel === '';
  }

  render() {
    return (
      <Host>
        <a href={this.href} download={this.download} target={this.target} aria-label={this.ariaLabel}>
          <span class="font">
            <slot aria-hidden={this.isHidden()} />
          </span>
        </a>
        {this.hasIcon() && <djl-icon class="icon" iconConfig={this.linkIconConfig}></djl-icon>}
      </Host>
    );
  }
}
