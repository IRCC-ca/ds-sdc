import { Component } from '@angular/core';
import { IIconConfig } from '@ircc-ca/ds-sdc-angular/icon';

@Component({
    selector: 'jds-sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent {
    rocketIconConfig = {
        unicode: 'e027',
        fontFamily: 'fa-solid',
    } as IIconConfig;
}
