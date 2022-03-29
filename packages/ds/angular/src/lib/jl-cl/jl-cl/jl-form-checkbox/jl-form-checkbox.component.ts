import { Component, Input } from '@angular/core';
import { IFieldConfig } from '../IFormBase';
import { BaseFieldComponent } from '../jl-base-field';

@Component({
    selector: 'jlcl-checkbox',
    templateUrl: './jl-form-checkbox.component.html',
    styleUrls: ['./jl-form-checkbox.component.scss'],
})
export class DynCheckboxComponent extends BaseFieldComponent {
    @Input()
    config!: IFieldConfig;
}
