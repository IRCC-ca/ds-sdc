import {
    Component,
    HostBinding,
    Input,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { IConfig } from '../IFormBase';
import { IValidator } from '../validator';

@Component({
    selector: 'jlcl-validation-list',
    templateUrl: './jl-validation-list.component.html',
    styleUrls: ['./jl-validation-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DynValidationListComponent implements OnInit {
    @HostBinding('class') class = 'jlcl-validation-list';
    @Input()
    config!: IConfig;
    @Input()
    group!: FormGroup;
    get formControl(): AbstractControl {
        return this.group?.get(this.config.id) as AbstractControl;
    }

    ngOnInit(): void {
        const validators = [] as ValidatorFn[];
        this.config.validation?.forEach((validator: IValidator) => {
            validators.push(validator.validator);
        });
        this.formControl?.setValidators(validators);
        this.formControl?.updateValueAndValidity();
    }
}