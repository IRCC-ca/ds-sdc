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
import { DynAddressAutocompleteComponent } from './jl-form-address-autocomplete/jl-form-address.component';
import { DynFormAlertComponent } from './jl-form-alert/jl-form-alert.component';
import { DynCheckboxComponent } from './jl-form-checkbox/jl-form-checkbox.component';
import { DynCurrencyFieldComponent } from './jl-form-currency-field/jl-form-currency-field.component';
import { DynDatepickerComponent } from './jl-form-datepicker/jl-form-datepicker.component';
import { DynDropDownComponent } from './jl-form-dropdown/jl-form-dropdown.component';
import { DynFormLabelComponent } from './jl-form-label/jl-form-label.component';
import { DynRadioComponent } from './jl-form-radio/jl-form-radio.component';
import { DynStaticAutocompleteComponent } from './jl-form-static-autocomplete/jl-form-static-autocomplete.component';
import { DynTableComponent } from './jl-form-table/jl-form-table.component';
import { DynTextFieldComponent } from './jl-form-textfield/jl-form-textfield.component';
import { StaticInfoBoxComponent } from './jl-presentation/jl-presentation-info-box/jl-presentation-info-box.component';
import { DynCurrentStatusInCanadaReadOnlyComponent } from './jl-presentation/jl-presentation-status-read-only/jl-presentation-status-read-only.component';
import { DynSubtitleComponent } from './jl-presentation/jl-presentation-subtitle/jl-presentation-subtitle.component';

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

const PRESENTATION = {
    alertBox: DynFormAlertComponent,
    subtitle: DynSubtitleComponent,
    infoBox: StaticInfoBoxComponent,
    statusInCanadaReadOnly: DynCurrentStatusInCanadaReadOnlyComponent,
};
export const COMPONENT_TYPES = {
    datepicker: DynDatepickerComponent,
    staticAutocomplete: DynStaticAutocompleteComponent,
    addressAutocomplete: DynAddressAutocompleteComponent,
    input: DynTextFieldComponent,
    label: DynFormLabelComponent,
    form: DynFormBaseComponent,
    checkbox: DynCheckboxComponent,
    radio: DynRadioComponent,
    dropdown: DynDropDownComponent,
    table: DynTableComponent,
    currencyField: DynCurrencyFieldComponent,
    ...PRESENTATION,
};
