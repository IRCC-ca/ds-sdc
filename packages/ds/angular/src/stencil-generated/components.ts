/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ircc-ca/ds-sdc-web';




export declare interface DjlButton extends Components.DjlButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['ariaLabelBtn', 'category', 'color', 'disabled', 'name', 'size', 'type', 'value']
})
@Component({
  selector: 'djl-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ariaLabelBtn', 'category', 'color', 'disabled', 'name', 'size', 'type', 'value']
})
export class DjlButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DjlFormCheckbox extends Components.DjlFormCheckbox {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['description', 'errorText', 'hint', 'label', 'required', 'type']
})
@Component({
  selector: 'djl-form-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['description', 'errorText', 'hint', 'label', 'required', 'type']
})
export class DjlFormCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DjlIcon extends Components.DjlIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['iconConfig']
})
@Component({
  selector: 'djl-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['iconConfig']
})
export class DjlIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DjlLink extends Components.DjlLink {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['ariaLabel', 'download', 'href', 'target']
})
@Component({
  selector: 'djl-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ariaLabel', 'download', 'href', 'target']
})
export class DjlLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


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
