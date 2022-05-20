import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'jds-sandbox1',
    templateUrl: './sandbox1.component.html',
    styleUrls: ['./sandbox1.component.scss'],
})
export class Sandbox1Component implements AfterViewInit {
    @ViewChild('invalidCheckbox')
    invalidCheckbox!: ElementRef<HTMLInputElement>;
    @ViewChild('invalidCheckedCheckbox')
    invalidCheckedCheckbox!: ElementRef<HTMLInputElement>;
    @ViewChild('indeterminateCheckbox')
    indeterminateCheckbox!: ElementRef<HTMLInputElement>;
    @ViewChild('indeterminateInvalidCheckbox')
    indeterminateInvalidCheckbox!: ElementRef<HTMLInputElement>;

    @ViewChild('invalidRadio') invalidRadio!: ElementRef<HTMLInputElement>;
    @ViewChild('invalidCheckedRadio')
    invalidCheckedRadio!: ElementRef<HTMLInputElement>;

    ngAfterViewInit() {
        // set the checkbox as invalid
        this.invalidCheckbox.nativeElement.setCustomValidity('invalid field');

        // set the checkbox as invalid and checked
        this.invalidCheckedCheckbox.nativeElement.setCustomValidity(
            'invalid field'
        );

        // set the checkbox as indeterminate state as true
        this.indeterminateCheckbox.nativeElement.indeterminate = true;

        // set the checkbox as indeterminate and invalid states
        this.indeterminateInvalidCheckbox.nativeElement.indeterminate = true;
        this.indeterminateInvalidCheckbox.nativeElement.setCustomValidity(
            'invalid field'
        );

        // set the radio button as invalid
        this.invalidRadio.nativeElement.setCustomValidity('invalid field');

        // set the radio button as invalid and checked
        this.invalidCheckedRadio.nativeElement.setCustomValidity(
            'invalid field'
        );
    }
}
