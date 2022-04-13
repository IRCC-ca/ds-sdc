/* tslint:disable */
/* auto-generated angular directive proxies */
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    NgZone,
} from '@angular/core';
import { Components } from '@ircc-ca/ds-sdc-web';
import { ProxyCmp } from './angular-component-lib/utils';

export type MyComponent = Components.MyComponent;

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
