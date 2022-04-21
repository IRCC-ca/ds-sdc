import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';

@NgModule({
    declarations: [
        IconComponent,
        ButtonComponent,
        LinkComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        IconComponent,
        ButtonComponent,
        LinkComponent
    ],
    providers: [],
})
export class JlCommonModule { }
