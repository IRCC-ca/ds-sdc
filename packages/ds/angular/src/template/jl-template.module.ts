import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JlCommonModule } from '../common/jl-common.module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        JlCommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [],
})
export class JlTemplateModule { }
