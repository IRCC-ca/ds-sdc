import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { IConfig } from '../IFormBase';
import { IValidator } from '../validator';
import { ErrorNames } from '../validator-types';

interface IFormErrorInfoArray {
    disallowedCharacter?: string;
    charDiff?: number;
    disallowedPattern?: string;
}

@Component({
    selector: 'jlcl-form-error',
    templateUrl: './jl-form-error.html',
})
export class DynFormErrorComponent implements OnInit {
    @Input()
    error!: IValidator;
    //TODO: update type
    @Input()
    validatedField!: AbstractControl;
    @Input()
    config!: IConfig;

    get errorParams(): IFormErrorInfoArray {
        const infoArray: IFormErrorInfoArray = {
            disallowedCharacter: this.validatedField.getError(
                ErrorNames.disallowed
            )?.disallowedCharacter,
            charDiff: this.getCharDiff(),
            disallowedPattern: this.getDisallowedPattern(),
        };
        return infoArray;
    }
    constructor(private changeRef: ChangeDetectorRef) {}
    ngOnInit(): void {
        this.validatedField.valueChanges.subscribe(() => {
            this.changeRef.markForCheck();
        });
    }

    getCharDiff(): number | undefined {
        if (this.validatedField.hasError(ErrorNames.maxLength)) {
            const error = this.validatedField.getError(ErrorNames.maxLength);
            return +error?.actualLength - +error?.requiredLength;
        } else if (this.validatedField.hasError(ErrorNames.minLength)) {
            const error = this.validatedField.getError(ErrorNames.minLength);
            return +error.requiredLength - +error.actualLength;
        }
        return undefined;
    }

    getDisallowedPattern(): string | undefined {
        if (
            this.validatedField.hasError(ErrorNames.pattern) &&
            !!this.validatedField.getError(ErrorNames.pattern).displayPattern
        ) {
            return this.validatedField.getError(ErrorNames.pattern)
                .displayPattern;
        }
        return undefined;
    }
}
