import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from '../dynamic-field.directive';
import { IFieldConfig } from '../IFormBase';
import { IValidator } from '../validator';
import { ErrorNames } from '../validator-types';

@Component({
    selector: 'jlcl-label',
    templateUrl: './jl-form-label.component.html',
    styleUrls: ['./jl-form-label.component.scss'],
})
export class DynFormLabelComponent implements IField {
    @Input()
    group!: FormGroup;
    @Input()
    disabled!: boolean;
    @Input()
    config!: IFieldConfig;

    public get isRequired(): boolean {
        return (
            this.config.validation?.find((validator: IValidator) => {
                return validator.errorName === ErrorNames.required;
            }) !== undefined
        );
    }
}
