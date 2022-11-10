import { HttpClient, HttpClientModule } from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import { AppRoutingModule } from './routing/app.routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { ThemeSelectComponent } from './theme/theme.component';

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
        Page1Component,
        Page2Component,
        Page3Component,
        Page4Component,
        Page5Component,
        ThemeSelectComponent,
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
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
