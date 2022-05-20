import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JLIconModule } from '@ircc-ca/ds-sdc-angular/icon';
import { LinkComponent } from './link.component';

@NgModule({
    declarations: [LinkComponent],
    imports: [CommonModule, JLIconModule],
    exports: [LinkComponent],
})
export class JLLinkModule {}
