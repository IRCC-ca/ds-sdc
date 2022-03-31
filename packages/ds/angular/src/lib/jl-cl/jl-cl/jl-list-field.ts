import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { IListType } from './IFormBase';
import { BaseFieldComponent } from './jl-base-field';

@Component({
    template: ``,
})
export class ListFieldComponent extends BaseFieldComponent {
    @Input()
    override config!: IListType;

    constructor(protected override changeRef: ChangeDetectorRef) {
        super(changeRef);
    }
}
