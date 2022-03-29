import { Component, Input } from '@angular/core';
import { IFieldConfig } from '../IFormBase';
import { BaseFieldComponent } from '../jl-base-field';

@Component({
    selector: 'jlcl-text-field',
    templateUrl: './jl-form-textfield.component.html',
    styleUrls: ['./jl-form-textfield.component.scss'],
})
export class DynTextFieldComponent extends BaseFieldComponent {
    @Input()
    config!: IFieldConfig;
}
