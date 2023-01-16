import { Component } from '@angular/core';

@Component({
    selector: 'jds-instructions',
    templateUrl: './instructions.component.html',
    styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent {
    ngOnInit() {
        const btn = document.getElementById('instructions');
        btn?.setAttribute('disabled', '');
        btn?.setAttribute('selected', '');
    }
    ngOnDestroy() {
        const btn = document.getElementById('instructions');
        btn?.removeAttribute('disabled');
        btn?.removeAttribute('selected');
    }
}
