import { Component } from '@angular/core';

@Component({
    selector: 'jds-stencil-qa',
    templateUrl: './stencil-qa.component.html',
    styleUrls: ['./stencil-qa.component.scss'],
})
export class StencilQAComponent {
    ngOnInit() {
        const btn = document.getElementById('stencil-qa');
        btn?.setAttribute('disabled', '');
        btn?.setAttribute('selected', '');
    }
    ngOnDestroy() {
        const btn = document.getElementById('stencil-qa');
        btn?.removeAttribute('disabled');
        btn?.removeAttribute('selected');
    }
}
