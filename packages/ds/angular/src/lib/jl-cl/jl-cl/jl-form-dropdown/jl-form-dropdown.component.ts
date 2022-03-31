import { Component } from '@angular/core';
import { ListFieldComponent } from '../jl-list-field';

@Component({
    selector: 'jlcl-dropdown',
    templateUrl: './jl-form-dropdown.component.html',
    styleUrls: ['./jl-form-dropdown.component.scss'],
})
export class DynDropDownComponent extends ListFieldComponent {}
