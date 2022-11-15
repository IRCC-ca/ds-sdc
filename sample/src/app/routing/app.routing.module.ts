import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { SandboxStencilComponent } from '../sandbox-stencil/sandbox-stencil.component';
import { SandboxComponent } from '../sandbox/sandbox.component';
import { Sandbox1Component } from '../sandbox1/sandbox1.component';
import { Sandbox2Component } from '../sandbox2/sandbox2.component';
import { Sandbox3Component } from '../sandbox3/sandbox3.component';

export const routes: Routes = [
    { path: 'sandbox', component: SandboxComponent },
    { path: 'sandbox-stencil', component: SandboxStencilComponent },
    { path: 'sandbox1', component: Sandbox1Component },
    { path: 'sandbox2', component: Sandbox2Component },
    { path: 'sandbox3', component: Sandbox3Component },
];

// configures NgModule imports and exports
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'sandbox', pathMatch: 'full' },
            ...routes,
        ]),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
