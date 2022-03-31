import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynFormBaseComponent } from './form-base/form-base';
import { IConfig } from './IFormBase';
import { DynFormAlertComponent } from './jl-form-alert/jl-form-alert.component';
import { DynCheckboxComponent } from './jl-form-checkbox/jl-form-checkbox.component';
import { DynDropDownComponent } from './jl-form-dropdown/jl-form-dropdown.component';
import { DynFormLabelComponent } from './jl-form-label/jl-form-label.component';
import { DynRadioComponent } from './jl-form-radio/jl-form-radio.component';
import { DynTextFieldComponent } from './jl-form-textfield/jl-form-textfield.component';

@Directive({
    selector: '[jlclField]',
})
export class DynamicFieldDirective implements OnInit, OnChanges {
    @Input()
    config!: IConfig;
    @Input()
    group!: FormGroup;
    @Input()
    disabled = false;
    component: ComponentRef<IField> | undefined;

    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) {}

    ngOnInit(): void {
        const factory = this.resolver.resolveComponentFactory<IField>(
            COMPONENT_TYPES[this.config.type]
        );
        this.component = this.container.createComponent(factory);
        this.component.instance.group = this.group;
        this.component.instance.config = this.config;
        this.component.instance.disabled = this.disabled;
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (this.component) {
            this.component.instance.disabled = this.disabled;

            if (this.component.instance.ngOnChanges) {
                this.component.instance.ngOnChanges(changes);
            }
        }
    }
}

export interface IField {
    group: FormGroup;
    config: IConfig;
    disabled: boolean;
    ngOnChanges?: (changes: SimpleChanges) => void;
}

export const COMPONENT_TYPES = {
    alertBox: DynFormAlertComponent,
    input: DynTextFieldComponent,
    label: DynFormLabelComponent,
    form: DynFormBaseComponent,
    checkbox: DynCheckboxComponent,
    radio: DynRadioComponent,
    dropdown: DynDropDownComponent,
};
