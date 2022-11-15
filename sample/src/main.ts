import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from '@ircc-ca/ds-sdc-web/loader';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}
defineCustomElements(window);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
