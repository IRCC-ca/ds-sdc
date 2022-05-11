import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IRCCModule, JlCommonModule } from '@ircc-ca/ds-sdc-angular';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app.routing.module';
import { SandboxComponent } from './sandbox/sandbox.component';
import { ThemeSelectComponent } from './theme/theme.component';

@NgModule({
    declarations: [AppComponent, SandboxComponent, ThemeSelectComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        JlCommonModule,
        IRCCModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
