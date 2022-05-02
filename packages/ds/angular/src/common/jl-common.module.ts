import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component'

export const LIST_COMPONENTS = [
    IconComponent,
    ButtonComponent,
    LinkComponent,
    HeaderComponent,
    FooterComponent,
    RadioButtonComponent,
    CheckboxComponent
]

@NgModule({
    declarations: [
        LIST_COMPONENTS
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LIST_COMPONENTS
    ],
    providers: [],
})
export class JlCommonModule {}
