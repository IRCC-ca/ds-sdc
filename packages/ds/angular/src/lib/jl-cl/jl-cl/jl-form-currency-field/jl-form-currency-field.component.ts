import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { IFieldConfig } from '../IFormBase';
import { BaseFieldComponent } from '../jl-base-field';

@Component({
    selector: 'app-jl-form-currency-field',
    templateUrl: './jl-form-currency-field.component.html',
})
export class DynCurrencyFieldComponent extends BaseFieldComponent {
    @Input()
    config!: IFieldConfig;
    constructor(
        protected changeRef: ChangeDetectorRef,
        private currencyPipe: CurrencyPipe
    ) {
        super(changeRef);
    }
    ngOnInit(): void {
        super.ngOnInit();
        if (this.config) {
            this.group
                .get(this.config.id)
                ?.valueChanges.pipe(distinctUntilChanged())
                .subscribe((value) => {
                    if (value) {
                        this.group.patchValue({
                            [this.config.id]: this.currencyPipe.transform(
                                value.replace(/\D/g, ''),
                                'CAD',
                                '',
                                '1.0-0'
                            ),
                        });
                    }
                });
        }
    }
}
