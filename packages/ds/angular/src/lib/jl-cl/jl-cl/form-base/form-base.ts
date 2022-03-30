import { Component, Input } from '@angular/core';
import { IField } from '../dynamic-field.directive';
import { IFormConfig } from '../IFormBase';
import { BaseFieldComponent } from '../jl-base-field';

@Component({
    selector: 'jlcl-form-base',
    templateUrl: './form-base.html',
    styleUrls: ['./form-base.scss'],
})
export class DynFormBaseComponent extends BaseFieldComponent implements IField {
    @Input()
    override config!: IFormConfig;
}
