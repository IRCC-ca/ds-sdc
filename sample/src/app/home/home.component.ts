import { Component } from '@angular/core';
import { IIconConfig } from '@ircc-ca/ds-sdc-angular/icon';

@Component({
    selector: 'jds-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    ngOnInit() {
        const btn = document.getElementById('home');
        btn?.setAttribute('disabled', '');
        btn?.setAttribute('selected', '');
    }

    ngOnDestroy() {
        const btn = document.getElementById('home');
        btn?.removeAttribute('disabled');
        btn?.removeAttribute('selected');
    }

    rocketIconConfig = {
        unicode: 'e027',
        fontFamily: 'fa-solid',
    } as IIconConfig;
}
