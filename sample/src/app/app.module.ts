import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IRCCModule } from '@ircc-ca/ds-sdc-angular';
import { JLButtonModule } from '@ircc-ca/ds-sdc-angular/button';
import { JLCheckboxModule } from '@ircc-ca/ds-sdc-angular/checkbox';
import { JLFooterModule } from '@ircc-ca/ds-sdc-angular/footer';
import { JLHeaderModule } from '@ircc-ca/ds-sdc-angular/header';
import { JLIconModule } from '@ircc-ca/ds-sdc-angular/icon';
import { JLLinkModule } from '@ircc-ca/ds-sdc-angular/link';
import { JLRadiobuttonModule } from '@ircc-ca/ds-sdc-angular/radio-button';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { ColoursComponent } from './dev/colours/colours.component';
import { DevBlankComponent } from './dev/dev-blank/dev-blank.component';
import { HomeComponent } from './home/home.component';
import { CoreQAComponent } from './qa/core-qa/core-qa.component';
import { QABlankComponent } from './qa/qa-blank/qa-blank.component';
import { StencilQAComponent } from './qa/stencil-qa/stencil-qa.component';
import { AppRoutingModule } from './routing/app.routing.module';
const JL_ANGULAR_COMPONENTS = [
    JLButtonModule,
    JLIconModule,
    JLLinkModule,
    JLRadiobuttonModule,
    JLCheckboxModule,
    JLFooterModule,
    JLHeaderModule,
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(
        httpClient,
        './assets/translations/',
        '.json'
    );
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        StencilQAComponent,
        QABlankComponent,
        DevBlankComponent,
        ColoursComponent,
        CoreQAComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        IRCCModule,
        JL_ANGULAR_COMPONENTS,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
