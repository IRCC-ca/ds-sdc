import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'jds-sandbox1',
    templateUrl: './sandbox1.component.html',
    styleUrls: ['./sandbox1.component.scss'],
})
export class Sandbox1Component implements AfterViewInit {
    @ViewChild("invalidRadio") invalidCheckbox!: ElementRef<HTMLInputElement>;

    ngAfterViewInit() {
        // set the checkbox as invalid
        this.invalidCheckbox.nativeElement.setCustomValidity('invalid field');
    }
}
