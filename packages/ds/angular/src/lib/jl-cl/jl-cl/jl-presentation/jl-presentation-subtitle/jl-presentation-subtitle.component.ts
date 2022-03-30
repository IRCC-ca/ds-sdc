import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from '../../dynamic-field.directive';
import { ISubtitleConfig } from '../../IFormBase';

@Component({
    selector: 'app-jl-presentation-subtitle',
    templateUrl: './jl-presentation-subtitle.component.html',
    styleUrls: ['./jl-presentation-subtitle.component.scss'],
})
export class DynSubtitleComponent implements IField {
    @Input()
    group!: FormGroup;
    @Input()
    disabled!: boolean;
    @Input()
    config!: ISubtitleConfig;

    hidden() {
        return this.config.hidden && this.config.hidden(this.group);
    }
}