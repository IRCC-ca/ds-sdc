import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
    MatAutocompleteSelectedEvent,
    MatAutocompleteTrigger
} from '@angular/material/autocomplete';
import {
    IAddressAutocompleteProps,
    IAddressAutocompleteType
} from 'jl-cl/jl-cl/IFormBase';
import { BaseFieldComponent } from 'jl-cl/jl-cl/jl-base-field';
import {
    CanadaPostFindResult,
    CanadaPostRetreiveResult,
    CanadaPostService,
    CanadaPostServiceName
} from 'jl-cl/services/canada-post.service';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
    selector: 'jlcl-address-field',
    templateUrl: './jl-form-address.component.html',
    styleUrls: ['./jl-form-address.component.scss'],
})
export class DynAddressAutocompleteComponent
    extends BaseFieldComponent
    implements OnInit
{
    @Input()
    config!: IAddressAutocompleteType;

    constructor(
        private canadaPostService: CanadaPostService,
        protected changeRef: ChangeDetectorRef
    ) {
        super(changeRef);
    }

    addressSuggestions!: Observable<any[]>;

    displayAutoComplete(value: CanadaPostFindResult): string {
        return value ? `${value.Text}` : '';
    }

    async optionSelected(
        $event: MatAutocompleteSelectedEvent,
        trigger: MatAutocompleteTrigger
    ) {
        const canadaPostID = $event.option.value.Id;
        if ($event.option.value.Next === CanadaPostServiceName.Find) {
            this.addressSuggestions = of(
                await this.canadaPostService
                    .getAddressSuggestions({
                        SearchTerm: $event.option.value.Description,
                        LastId: $event.option.value.Id as string,
                    })
                    .toPromise()
            );
            trigger.openPanel();
        } else if (
            $event.option.value.Next === CanadaPostServiceName.Retrieve
        ) {
            const canadaPostAddressData = await this.canadaPostService
                .getAddress({ Id: canadaPostID })
                .toPromise();

            this.setFormFields(canadaPostAddressData);
        }
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.formControl.valueChanges
            .pipe(
                distinctUntilChanged(),
                debounceTime(1000),
                filter((query: any) => !!query && typeof query === 'string')
            )
            .subscribe((query: string) => {
                this.addressSuggestions =
                    query.length >= 3
                        ? this.canadaPostService.getAddressSuggestions({
                                SearchTerm: query,
                            })
                        : of([]);
            
            });
    }

    private setFormFields(canadaPostAddressData: CanadaPostRetreiveResult) {
        const addressProps = (this.config as IAddressAutocompleteType)
            .addressAutocompleteParams;

        const formIdToCanadaPostKeyMap = {
            cityId: 'City',
            postalCodeId: 'PostalCode',
            provinceId: 'ProvinceCode',
            unitId: 'SubBuilding',
            poBoxId: 'POBoxNumber',
        };

        Object.entries(formIdToCanadaPostKeyMap).forEach(
            ([formId, canadaPostKey]) => {
                const formControlId =
                    addressProps[formId as keyof IAddressAutocompleteProps];
                if (formControlId) {
                    this.group
                        .get(formControlId)
                        ?.setValue(
                            canadaPostAddressData[
                                canadaPostKey as keyof CanadaPostRetreiveResult
                            ]
                        );
                }
            }
        );
    }
}
