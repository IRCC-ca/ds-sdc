import { Component } from '@angular/core';
import { IIconConfig } from '@ircc-ca/ds-sdc-angular/icon';

@Component({
    selector: 'jds-page2',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.scss'],
})
export class Page2Component {

    rocketIconConfig = {
        unicode: 'e027',
        fontFamily: 'fa-solid',
    } as IIconConfig;
}
