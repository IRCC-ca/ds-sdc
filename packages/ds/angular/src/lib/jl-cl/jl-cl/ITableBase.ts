import { FormGroup } from '@angular/forms';
import {
    IConfig,
    IDatepickerConfig,
    IFormConfig,
    IListType,
} from './IFormBase';

export type ConditionCheck = (formGroup: FormGroup) => string;

export interface ITableConfig extends IFormConfig {
    addButtonLabel: string;
    childConfigs: ITableColumnConfig[];
    sort?: {
        columnName?: string;
        customized?: (value: any) => Array<any>;
    };
    columnOrder?: string[];
    mobileView?: {
        oneLineFromToDateIDs?: string[];
        titleTransformDisplay?: (value: any) => string;
        columnOrder: string[];
    };
    modal: {
        submit: {
            titleLabel: string;
            submitLabel: string;
        };
        edit: {
            titleLabel: string;
        };
        delete: {
            titleLabel: string;
            contentLabel: string;
            deleteLabel: string;
            deleteContentVariable: ConditionCheck;
        };
    };
}
export interface ITableTransformDisplayOptions {
    isMobileView?: boolean;
    rowValues?: any;
}
export interface ITableColumnConfig
    extends IConfig,
        IListType,
        IDatepickerConfig {
    unique?: {
        watchValue: string;
        resetValue: string;
    };
    columnHeader: string;
    transformDisplay?: (
        value: string,
        options?: ITableTransformDisplayOptions
    ) => string;
}
