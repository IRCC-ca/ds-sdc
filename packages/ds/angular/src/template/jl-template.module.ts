import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [],
})
export class JlTemplateModule { }
