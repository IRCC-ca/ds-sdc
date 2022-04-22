import { NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';

const DECLARATIONS = [
    // proxies
    ...DIRECTIVES,
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [],
    providers: [],
})
export class IRCCModule {}
