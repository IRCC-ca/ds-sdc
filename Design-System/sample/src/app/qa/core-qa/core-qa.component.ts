import { Component } from '@angular/core';

@Component({
    selector: 'jds-core-qa',
    templateUrl: './core-qa.component.html',
    styleUrls: ['./core-qa.component.scss'],
})
export class CoreQAComponent {
    ngOnInit() {
        const btn = document.getElementById('core-qa');
        btn?.setAttribute('disabled', '');
        btn?.setAttribute('selected', '');
    }
    ngOnDestroy() {
        const btn = document.getElementById('core-qa');
        btn?.removeAttribute('disabled');
        btn?.removeAttribute('selected');
    }
}
