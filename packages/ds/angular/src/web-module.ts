import { NgModule } from '@angular/core';
import { defineCustomElements } from '@ircc-ca/ds-sdc-web/loader';

import * as Components from './stencil-generated/components';

// All stencil generated components should be declared below.
const DJL_Components = [
  Components.MyComponent,
  Components.DjlButton,
  Components.DjlFormCheckbox,
  Components.DjlIcon,
  Components.DjlLink,
  Components.DjlHeader,
  Components.DjlFooter
];

defineCustomElements();

const DECLARATIONS = [
    // proxies
    ...DJL_Components,
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [],
    providers: [],
})
export class IRCCModule {}
