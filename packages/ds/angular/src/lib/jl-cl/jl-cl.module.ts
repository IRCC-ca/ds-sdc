
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicFieldDirective } from './jl-cl/dynamic-field.directive';
import { components } from './jl-cl/forms.module';

@NgModule({
declarations: [...components, DynamicFieldDirective],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
    ],
    exports: [...components, DynamicFieldDirective],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JlClModule {}
