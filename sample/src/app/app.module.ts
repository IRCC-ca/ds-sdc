import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

// TODO: update path to the package
import { JlClModule } from 'packages/ds/angular/src/lib/jl-cl/jl-cl.module';
import { JlTemplateModule } from 'packages/ds/angular/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    JlClModule,
    JlTemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
