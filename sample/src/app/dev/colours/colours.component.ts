import { Component } from '@angular/core';

@Component({
    selector: 'jds-colours',
    templateUrl: './colours.component.html',
    styleUrls: ['./colours.component.scss'],
})
export class ColoursComponent {
    ngOnInit() {
        const btn = document.getElementById('colours');
        btn?.setAttribute('disabled', '');
        btn?.setAttribute('selected', '');
    }
    ngOnDestroy() {
        const btn = document.getElementById('colours');
        btn?.removeAttribute('disabled');
        btn?.removeAttribute('selected');
    }
}
