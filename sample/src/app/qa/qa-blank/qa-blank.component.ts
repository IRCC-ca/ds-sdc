import { Component } from '@angular/core';

@Component({
    selector: 'jds-qa-blank',
    templateUrl: './qa-blank.component.html',
    styleUrls: ['./qa-blank.component.scss'],
})
export class QABlankComponent {
    ngOnInit() {
        const btn = document.getElementById('qa-blank');
        btn?.setAttribute('disabled', '');
        btn?.setAttribute('selected', '');
    }

    ngOnDestroy() {
        const btn = document.getElementById('qa-blank');
        btn?.removeAttribute('disabled');
        btn?.removeAttribute('selected');
    }
}
