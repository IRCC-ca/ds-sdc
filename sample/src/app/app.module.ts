import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IRCCModule, JlCommonModule } from '@ircc-ca/ds-sdc-angular';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        JlCommonModule,
        IRCCModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
