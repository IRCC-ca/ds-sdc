import { Component } from '@angular/core';
import { ListFieldComponent } from '../jl-list-field';

@Component({
    selector: 'jlcl-radio',
    templateUrl: './jl-form-radio.component.html',
    styleUrls: ['./jl-form-radio.component.scss'],
})
export class DynRadioComponent extends ListFieldComponent {}
