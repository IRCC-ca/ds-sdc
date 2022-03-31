import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from '../dynamic-field.directive';
import { IAlertConfig } from '../IFormBase';

@Component({
    selector: 'jlcl-alert',
    templateUrl: './jl-form-alert.component.html',
    styleUrls: ['./jl-form-alert.component.scss'],
})
export class DynFormAlertComponent implements IField {
    @Input()
    group!: FormGroup;
    @Input()
    disabled!: boolean;
    @Input()
    config!: IAlertConfig;

    iconMap = {
        info: 'info_outline',
        warn: 'warning_amber',
        error: 'info_outline',
        success: 'check_circle_outline',
        tip: 'lightbulb_outline',
    };

    getCssClass() {
        if (this.config.alertType === 'warn')
            return 'warn-icon material-icons-round';
        else return this.config.alertType + '-icon';
    }
    isSingleLine() {
        if (this.config.contentType === 'single') return true;
        else return false;
    }
    hidden() {
        return this.config.hidden && this.config.hidden(this.group);
    }
}
