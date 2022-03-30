import {
    AbstractControl,
    FormArray,
    ValidationErrors,
    ValidatorFn
} from '@angular/forms';
import { IListItem } from '../IFormBase';
import { ErrorNames } from '../validator-types';

export const allowedPatternValidator =
    (allowedPattern: RegExp): ValidatorFn =>
    (control: AbstractControl): ValidationErrors | null => {
        if (!control.value || typeof control.value !== 'string') {
            return null;
        }
        if (allowedPattern.test(control.value)) {
            return null;
        } else {
            let disallowedChars = '';
            [
                ...control.value.replace(
                    new RegExp(`${allowedPattern}`, 'g'),
                    ''
                ),
            ].forEach((character: string) => {
                if (disallowedChars.indexOf(character) === -1) {
                    disallowedChars += character;
                }
            });

            return {
                [ErrorNames.disallowed]: {
                    disallowedCharacter: disallowedChars,
                },
            };
        }
    };

export const disallowedPatternValidator =
    (disallowedPattern: RegExp | string, displayPattern: string): ValidatorFn =>
    (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) {
            return null;
        }
        if (control.value.toString().match(disallowedPattern)) {
            return {
                [ErrorNames.pattern]: {
                    displayPattern,
                },
            };
        }
        return null;
    };

export const validateTable = (
    control: AbstractControl
): ValidationErrors | null => {
    const group = control as FormArray;
    if (!group.controls) {
        return null;
    }

    if (Object.keys(group.controls).length === 0) {
        return {
            [ErrorNames.required]: {},
        };
    } else {
        return null;
    }
};

export const validatePrimaryNumber = (
    control: AbstractControl
): ValidationErrors | null => {
    const group = control as FormArray;
    const formArrayValues = group.value;
    return { [ErrorNames.primaryNumberRequired]: {} };
};

// TODO: Remove this validator and refactor jl-form-error.html
export const listValidator =
    (items: IListItem[]): ValidatorFn =>
    (control: AbstractControl): ValidationErrors | null => {
        return null;
    };
