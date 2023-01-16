import { Component } from '@angular/core';

@Component({
    selector: 'jds-component-qa',
    templateUrl: './angular-qa.component.html',
    styleUrls: ['./angular-qa.component.scss'],
})
export class AngularQAComponent {
    ngOnInit() {
        const btn = document.getElementById('component-qa');
        btn?.setAttribute('disabled', '');
        btn?.setAttribute('selected', '');
    }
    ngOnDestroy() {
        const btn = document.getElementById('component-qa');
        btn?.removeAttribute('disabled');
        btn?.removeAttribute('selected');
    }
}
