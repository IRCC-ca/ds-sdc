import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicFieldDirective } from './jl-cl/dynamic-field.directive';
import { components } from './jl-cl/forms.module';

@NgModule({
    declarations: [...components, DynamicFieldDirective],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        TranslateModule.forChild(),
        BrowserModule,
    ],
    exports: [...components, DynamicFieldDirective],
    providers: [CurrencyPipe],
})
export class JlClModule {}
