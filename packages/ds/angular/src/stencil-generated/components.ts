/* eslint-disable */
/* tslint:disable */
/* auto-generated angular directive proxies */
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    NgZone,
} from '@angular/core';
import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from '@ircc-ca/ds-sdc-web';

export declare interface DjlButton extends Components.DjlButton {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: [
        'ariaLabelBtn',
        'category',
        'color',
        'disabled',
        'name',
        'size',
        'type',
        'value',
    ],
})
@Component({
    selector: 'djl-button',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: [
        'ariaLabelBtn',
        'category',
        'color',
        'disabled',
        'name',
        'size',
        'type',
        'value',
    ],
})
export class DjlButton {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MyComponent extends Components.MyComponent {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ['first', 'last', 'middle', 'theme'],
})
@Component({
    selector: 'my-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: ['first', 'last', 'middle', 'theme'],
})
export class MyComponent {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
