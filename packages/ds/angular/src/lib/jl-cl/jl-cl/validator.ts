import { ValidatorFn, Validators } from '@angular/forms';
import { IListItem } from './IFormBase';
import {
    maxDateValidator,
    minDateValidator,
} from './validator-functions/date-validator';
import {
    allowedPatternValidator,
    listValidator,
    validatePrimaryNumber,
    validateTable,
} from './validator-functions/simple-validators';
import { ErrorNames } from './validator-types';
export interface IValidator {
    errorName: ErrorNames;
    validator: ValidatorFn;
    errorMsg: string;
}

export interface IValidatorModel {
    [validatorName: string]: IValidator;
}
export interface IDynamicValidatorModel {
    [validatorName: string]: (data: any) => IValidator;
}

export const VALIDATORS: IValidatorModel = {
    required: {
        errorName: ErrorNames.required,
        validator: Validators.required,
        errorMsg: 'ErrorMessage.required',
    },
};

export const VALIDATOR_TABLE_REQUIRED = {
    tableRequire: {
        errorName: ErrorNames.required,
        validator: validateTable,
        errorMsg: 'ErrorMessage.required',
    },
};

export const VALIDATOR_TABLE_PRIMARY_NUMBER = {
    primaryNumberRequire: {
        errorName: ErrorNames.primaryNumberRequired,
        validator: validatePrimaryNumber,
        errorMsg: 'ErrorMessage.primaryNumberRequired',
    },
};

export const VALIDATORS_DYNAMIC: IDynamicValidatorModel = {
    minDate: (date: Date) =>
        ({
            errorMsg: 'Date is below minimum',
            errorName: ErrorNames.minDate,
            validator: minDateValidator(date),
        } as IValidator),
    maxDate: (date: Date) =>
        ({
            errorMsg: 'Date is above maximum',
            errorName: ErrorNames.maxDate,
            validator: maxDateValidator(date),
        } as IValidator),
    minLength: (minimum: number) => ({
        errorMsg: 'ErrorMessage.MinLength',
        errorName: ErrorNames.minLength,
        validator: Validators.minLength(minimum),
    }),
    maxLength: (maximum: number) => ({
        errorMsg: 'ErrorMessage.MaxLength',
        errorName: ErrorNames.maxLength,
        validator: Validators.maxLength(maximum),
    }),
    allowedPattern: (regex: RegExp) => ({
        errorMsg: 'ErrorMessage.DisallowedCharacter',
        errorName: ErrorNames.disallowed,
        validator: allowedPatternValidator(regex),
    }),
    autocompleteList: (items: IListItem[]) => ({
        errorMsg: 'ErrorMessage.invalid',
        errorName: ErrorNames.invalid,
        validator: listValidator(items),
    }),
    maxCurrencyLength: (maximum: number) => ({
        errorMsg: 'Must contain only numbers, between 0 and 999,999,999', //Text doesn't exist in translation, will update once added
        errorName: ErrorNames.maxLength,
        validator: Validators.maxLength(maximum),
    }),
};
