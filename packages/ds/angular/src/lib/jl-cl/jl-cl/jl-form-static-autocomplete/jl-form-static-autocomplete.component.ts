import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IListItem, IStaticAutocompleteConfig } from 'jl-cl/jl-cl/IFormBase';
import { BaseFieldComponent } from 'jl-cl/jl-cl/jl-base-field';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { VALIDATORS_DYNAMIC } from '../validator';
import { ErrorNames } from '../validator-types';

@Component({
    selector: 'jlcl-static-autocomplete',
    templateUrl: './jl-form-static-autocomplete.component.html',
    styleUrls: ['./jl-form-static-autocomplete.component.scss'],
})
export class DynStaticAutocompleteComponent
    extends BaseFieldComponent
    implements OnInit
{
    @Input()
    config!: IStaticAutocompleteConfig;

    items!: Observable<IListItem[]>;

    @ViewChild('autocompleteInput') input!: ElementRef;

    private _filter(value: string): IListItem[] {
        const filterValue = value.toLowerCase();
        return this.config.items.filter((option: IListItem) =>
            option.value.toLowerCase().includes(filterValue)
        );
    }

    ngOnInit(): void {
        this.config.validation?.push(
            VALIDATORS_DYNAMIC.autocompleteList(this.config.items)
        );

        super.ngOnInit();

        this.formControl.valueChanges
            .pipe(
                startWith(''),
                map((value) => value),
                map((name) =>
                    name ? this._filter(name) : this.config.items.slice()
                )
            )
            .subscribe((res: IListItem[]) => {
                this.items = of(res);
                if (
                    this.input.nativeElement.value &&
                    !this.isValidLabel(this.input.nativeElement.value)
                ) {
                    this.formControl.setErrors({
                        [ErrorNames.invalid]: {},
                    });
                }
            });
    }

    private isValidLabel(displayValue: string) {
        return this.indexOfConfigItem(displayValue) >= 0;
    }

    displayAutoComplete(key: string): string {
        return this.config.items.find((item) => item.key === key)?.value || '';
    }

    private indexOfConfigItem(displayValue: string) {
        let index;
        if (this.config.numeric && !isNaN(parseInt(displayValue))) {
            index = this.config.items.findIndex(
                (item) => parseInt(item.value) === parseInt(displayValue)
            );
        } else {
            index = this.config.items.findIndex(
                (item) =>
                    item.value.toLowerCase() === displayValue.toLowerCase()
            );
        }
        return index;
    }

    optionSelected() {
        if (this.config.optionSelected) {
            this.config.optionSelected();
        }
    }

    onBlur() {
        const index = this.indexOfConfigItem(this.input.nativeElement.value);
        if (index >= 0) {
            this.formControl.setValue(this.config.items[index].key);
            this.optionSelected();
        }

        
    }
}
