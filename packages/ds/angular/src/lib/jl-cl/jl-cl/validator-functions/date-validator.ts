import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ErrorNames } from "../validator-types";

export function minDateValidator(date: Date): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		if (!control.value) {
			return null;
		}
		const compareDate = toCompareDate(date);
		const controlDate = toCompareDate(control.value);
		if (controlDate < compareDate) {
			return {
				[ErrorNames.minDate]: {
					min: date,
					actual: control.value,
				},
			}
		} else {
			return null;
		}
	};
}
export function maxDateValidator(date: Date): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		if (!control.value) {
			return null;
		}

		const compareDate = toCompareDate(date);
		const controlDate = toCompareDate(control.value);
		if (controlDate > compareDate) {
			return {
				[ErrorNames.maxDate]: {
					max: date,
					actual: control.value,
				},
			}
		} else {
			return null;
		}
	};
}

export function toCompareDate(date: Date): number {
	return +(date.getFullYear().toString() + date.getMonth().toString().padStart(2, '0') + date.getDate().toString().padStart(2, '0'));
}