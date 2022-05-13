import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
    declarations: [
        IconComponent,
        ButtonComponent,
        LinkComponent,
        CheckboxComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        IconComponent,
        ButtonComponent,
        LinkComponent,
        CheckboxComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [],
})
export class JlCommonModule {}
