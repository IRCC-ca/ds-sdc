import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from '../../dynamic-field.directive';
import { ICurrentStatusInCanadaReadOnlyConfig } from '../../IFormBase';
import { BaseFieldComponent } from '../../jl-base-field';

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
    ) {
        super(changeRef);
    }

    ngOnInit(): void {
        super.ngOnInit();

        this.group.valueChanges.subscribe((value) => {
            const currentStatusValue =
                value.currentStatusKnownInfo?.currentStatus?.toLowerCase();

            this.currentStatus =
                currentStatusValue?.charAt(0).toUpperCase() +
                currentStatusValue?.slice(1);
        });
    }

    hidden() {
        return this.config.hidden && this.config.hidden(this.group);
    }
}
