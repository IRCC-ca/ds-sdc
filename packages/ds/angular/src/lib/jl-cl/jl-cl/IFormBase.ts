import { FormGroup } from '@angular/forms';
import { COMPONENT_TYPES } from './dynamic-field.directive';
import { IValidator } from './validator';
export type ConditionCheck = (formGroup: FormGroup) => boolean;
export interface IConfig {
    id: string;
    type: keyof typeof COMPONENT_TYPES;
    label?: string;
    hint?: string;
    alert?: string;
    validation?: IValidator[];
    help?: boolean;
    hideRequiredLabel?: boolean;
    hideStar?: boolean;
    moreInfo?: () => void;
    hidden?: ConditionCheck;
    disabled?: ConditionCheck;
    readonly?: ConditionCheck;
    subText?: string;
    noLabelMargin?: boolean;
}
export interface IDateProps extends IFieldConfig {
    dateOptions: {
        minDate: Date;
        maxDate: Date;
        dateFormat: 'dd MMM YYYY' | 'MMM dd YYYY';
        pickerLocale: 'GB' | 'US'; // GB uses dd-MMM-YYYY, US uses MMM-dd-YYYY
    };
}
export interface IListType extends IFieldConfig {
    items: IListItem[];
}

export interface IStaticAutocompleteConfig extends IListType {
    forceKeypadOnMobile?: boolean;
    numeric?: boolean;
    optionSelected?: () => void;
}
export interface IAddressAutocompleteProps {
    cityId?: string;
    postalCodeId?: string;
    provinceId?: string;
    unitId?: string;
    poBoxId?: string;
}

export interface IAddressAutocompleteType extends IFieldConfig {
    addressAutocompleteParams: IAddressAutocompleteProps;
}
export interface IListItem {
    key: string;
    value: string;
}

export interface ISelectProps extends IListType {
    searchProps?: {
        hide?: boolean;
        disable?: boolean;
        prePopSearch?: string;
    };
}

export interface IFormConfig extends IConfig {
    childConfigs: IConfig[];
}
export interface IFieldConfig extends IConfig {
    placeholder?: string;
    defaultValue?: unknown;
}

export interface IDatepickerConfig extends IConfig {
    minYear: number;
    maxYear: number;
    childConfigs?: IConfig[];
    useMaxDateAsToday?: boolean;
    useMinDayAs?: number;
    useMaxDayAs?: number;
    useUnknownForMonthAndDay?: boolean;
    ongoing?: boolean;
    comparedWithId?: string;
    hiddenDay?: boolean;
    transformDisplay?: (value: any) => string;
}

export interface IPresentationConfig {
    id: string;
    type: keyof typeof COMPONENT_TYPES;
    hidden?: ConditionCheck;
    noLabelMargin?: boolean;
}

export interface IAlertConfig extends IPresentationConfig {
    alertType: 'warn' | 'info' | 'error' | 'success' | 'tip';
    label: string;
    content?: string;
    contentType?: 'single';
    link?: {
        url: string;
        name: string;
    };
}

export interface ISubtitleConfig extends IPresentationConfig {
    label: string;
    textType: string;
}
export interface IInfoBoxConfig extends IPresentationConfig {
    icon: 'check_circle' | 'warning' | 'info';
    heading: string;
    caption: string;
    link?: {
        url: string;
        name: string;
    };
}

export interface ICurrentStatusInCanadaReadOnlyConfig
    extends IPresentationConfig {
    statusHeading: string;
    toDateLabel: string;
    fromDateLabel: string;
}
