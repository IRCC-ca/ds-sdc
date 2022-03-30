import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from '../../dynamic-field.directive';
import { IInfoBoxConfig } from '../../IFormBase';

@Component({
    selector: 'app-jl-presentation-info-box',
    templateUrl: './jl-presentation-info-box.component.html',
    styleUrls: ['./jl-presentation-info-box.component.scss'],
})
export class StaticInfoBoxComponent implements IField {
    @Input()
    group!: FormGroup;
    @Input()
    disabled!: boolean;
    @Input()
    config!: IInfoBoxConfig;

    hidden() {
        return this.config.hidden && this.config.hidden(this.group);
    }
}
