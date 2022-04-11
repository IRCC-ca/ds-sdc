import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from '../common/button/button.component';
import { JlCommonModule } from '../common/jl-common.module';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, ButtonComponent],
    imports: [JlCommonModule],
    exports: [HeaderComponent, FooterComponent, ButtonComponent],
    providers: [],
})
export class JlTemplateModule {}
