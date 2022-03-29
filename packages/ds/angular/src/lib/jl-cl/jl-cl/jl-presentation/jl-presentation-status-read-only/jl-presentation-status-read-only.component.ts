import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from 'jl-cl/jl-cl/dynamic-field.directive';
import { ICurrentStatusInCanadaReadOnlyConfig } from 'jl-cl/jl-cl/IFormBase';
import { BaseFieldComponent } from 'jl-cl/jl-cl/jl-base-field';
import { LOVService } from 'src/app/services/lov.service';

@Component({
    selector: 'app-jl-presentation-subtitle',
    templateUrl: './jl-presentation-status-read-only.component.html',
    styleUrls: ['./jl-presentation-status-read-only.component.scss'],
})
export class DynCurrentStatusInCanadaReadOnlyComponent
    extends BaseFieldComponent
    implements IField, OnInit
{
    @Input()
    group!: FormGroup;
    @Input()
    disabled!: boolean;
    @Input()
    config!: ICurrentStatusInCanadaReadOnlyConfig;

    fromMonth?: string;
    toMonth?: string;
    currentStatus?: string;
    constructor(
        protected changeRef: ChangeDetectorRef,
        private lovService: LOVService
    ) {
        super(changeRef);
    }

    ngOnInit(): void {
        super.ngOnInit();

        this.group.valueChanges.subscribe((value) => {
            const fromMonthValue = value.currentStatusKnownInfo?.fromDate.month;
            const toMonthValue = value.currentStatusKnownInfo?.toDate.month;
            const currentStatusValue =
                value.currentStatusKnownInfo?.currentStatus?.toLowerCase();

            this.currentStatus =
                currentStatusValue?.charAt(0).toUpperCase() +
                currentStatusValue?.slice(1);

            this.fromMonth = this.lovService.getItemByKey(
                'Month',
                fromMonthValue
            );
            this.toMonth = this.lovService.getItemByKey('Month', toMonthValue);
        });
    }

    hidden() {
        return this.config.hidden && this.config.hidden(this.group);
    }
}
