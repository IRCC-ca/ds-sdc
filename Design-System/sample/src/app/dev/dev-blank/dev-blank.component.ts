import { Component } from '@angular/core';

@Component({
    selector: 'jds-dev-blank',
    templateUrl: './dev-blank.component.html',
    styleUrls: ['./dev-blank.component.scss'],
})
export class DevBlankComponent {
    ngOnInit() {
        const btn = document.getElementById('dev-blank');
        btn?.setAttribute('disabled', '');
        btn?.setAttribute('selected', '');
    }

    ngOnDestroy() {
        const btn = document.getElementById('dev-blank');
        btn?.removeAttribute('disabled');
        btn?.removeAttribute('selected');
    }
}
