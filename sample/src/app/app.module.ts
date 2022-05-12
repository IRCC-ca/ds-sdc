import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IRCCModule } from '@ircc-ca/ds-sdc-angular';
import { TranslateModule } from '@ngx-translate/core';
import { JLButtonModule } from '@ircc-ca/ds-sdc-angular/src/common/button';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app.routing.module';
import { SandboxComponent } from './sandbox/sandbox.component';
import { Sandbox1Component } from './sandbox1/sandbox1.component';
import { ThemeSelectComponent } from './theme/theme.component';
import { JLIconModule } from '@ircc-ca/ds-sdc-angular/src/common/icon';
import { JLFooterModule } from '@ircc-ca/ds-sdc-angular/src/common/footer';
import { JLHeaderModule } from '@ircc-ca/ds-sdc-angular/src/common/header';
import { JLLinkModule } from '@ircc-ca/ds-sdc-angular/src/common/link';

const JL_ANGULAR_COMPONENTS = [        
    JLButtonModule,
    JLIconModule,
    JLLinkModule,
    JLFooterModule,
    JLHeaderModule
]

@NgModule({
    declarations: [AppComponent, SandboxComponent, Sandbox1Component, ThemeSelectComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        IRCCModule,
        JL_ANGULAR_COMPONENTS,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
