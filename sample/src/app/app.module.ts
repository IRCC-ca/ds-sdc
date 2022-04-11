import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';

import { JlTemplateModule, JlCommonModule } from '@ircc-ca/ds-sdc-angular'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    JlTemplateModule,
    JlCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
