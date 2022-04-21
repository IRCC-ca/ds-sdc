import { Component, Input } from '@angular/core';
import { IIconConfig } from '../icon/icon.component';

@Component({
  selector: 'jds-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})

export class LinkComponent{

  @Input() download?: string;   //if developer is specifying a download in the href, they need to specify a download name in order for the "download icon" to appear next to it
  @Input() href!: string;
  @Input() target?: '_blank' | '_parent' | '_self' | '_top';
  @Input() ariaLabel?: string;

  linkIconConfig!: IIconConfig;

  constructor() {
  }

  public get getIcon(): string[] {
    if (this.download) {
      return ['f56d', 'fa-solid'];
    } else {
      switch (this.href?.substr(0, 4)) {
        case ('http'):
          return ['f08e', 'fa-regular'];
        case ('mail'):
          return ['f0e0', 'fa-solid'];
        case ('tel:'):
          return ['f095', 'fa-solid'];
        default:
          return ['', ''];
      }
    }
  }

  public buildIconConfig() {
    this.linkIconConfig = {
      unicode: this.getIcon[0],
      fontFamily: this.getIcon[1],
    } as IIconConfig;
  }

  public get hasIcon(): boolean {
    if (
      (this.download !== undefined)
    ||
    (this.href?.substr(0, 4) === 'http')
    ||
    (this.href?.substr(0, 4) === 'mail')
    ||
    (this.href?.substr(0, 4) === 'tel:')
    )
    {
      this.buildIconConfig();
      return true;
    } else {
      return false;
    }
  }

  public get isHidden(): boolean {
    return(
      this.ariaLabel === ''
    );
}

}
