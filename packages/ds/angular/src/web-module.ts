import { NgModule } from '@angular/core';
import { defineCustomElements } from '@ircc-ca/ds-sdc-web/loader';

import * as Components from './stencil-generated/components';

const DJL_Components = [Components.MyComponent, Components.DjlButton];

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
