import { NgModule } from '@angular/core';

// TODO: Update path!
// import { defineCustomElements } from 'packages/ds/web/loader';
import * as Components from './components';

const IrccComponents = [
    Components.MyComponent
];

// defineCustomElements();

const DECLARATIONS = [
  // proxies
  ...IrccComponents,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class IRCCModule {}