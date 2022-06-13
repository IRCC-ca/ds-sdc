/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ircc-ca/ds-sdc-web';




export declare interface MyComponent extends Components.MyComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['first', 'last', 'middle', 'theme']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['first', 'last', 'middle', 'theme']
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WebButton extends Components.WebButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['ariaLabelBtn', 'category', 'color', 'disabled', 'label', 'name', 'size', 'type', 'value']
})
@Component({
  selector: 'web-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ariaLabelBtn', 'category', 'color', 'disabled', 'label', 'name', 'size', 'type', 'value']
})
export class WebButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
