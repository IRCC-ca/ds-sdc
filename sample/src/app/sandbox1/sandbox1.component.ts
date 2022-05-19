import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'jds-sandbox1',
    templateUrl: './sandbox1.component.html',
    styleUrls: ['./sandbox1.component.scss'],
})
export class Sandbox1Component implements AfterViewInit {
    @ViewChild('invalidRadio') invalidRadio!: ElementRef<HTMLInputElement>;

    ngAfterViewInit() {
        // set the radio button as invalid
        this.invalidRadio.nativeElement.setCustomValidity('invalid field');
    }
}
