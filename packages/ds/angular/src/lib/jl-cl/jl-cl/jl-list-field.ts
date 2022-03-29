import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { IListType } from './IFormBase';
import { BaseFieldComponent } from './jl-base-field';

@Component({
    template: ``,
})
export class ListFieldComponent extends BaseFieldComponent {
    @Input()
    config!: IListType;

    constructor(protected changeRef: ChangeDetectorRef) {
        super(changeRef);
    }
}
