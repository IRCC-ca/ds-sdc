import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IIconConfig } from '@ircc-ca/ds-sdc-angular';
import { TranslateService } from '@ngx-translate/core';
// import { IFieldConfig } from 'packages/ds/angular/src/lib/jl-cl/jl-cl/IFormBase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{

    title = 'sample';

    // config = {
    //   id: 'firstName',
    //   type: 'input',
    //   label: 'test label',
    //   hint: 'test test',
    //   placeholder: '',
    // } as IFieldConfig;

    alicornIconConfig = {
        unicode: 'f6b0',
        fontFamily: 'fa-solid',
    } as IIconConfig;

    rocketIconConfig = {
        unicode: 'e027',
        fontFamily: 'fa-solid',
    } as IIconConfig;

    @ViewChild("invalidRadio") invalidRadio!: ElementRef<HTMLInputElement>;

    constructor(private translate: TranslateService) {}

    ngAfterViewInit() {
        // set the radio button as invalid
        this.invalidRadio.nativeElement.setCustomValidity('invalid field');
    }
}