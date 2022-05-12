import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { SandboxComponent } from '../sandbox/sandbox.component';
import { Sandbox1Component } from '../sandbox1/sandbox1.component';
export const routes: Routes = [
    { path: 'sandbox', component: SandboxComponent },
    { path: 'sandbox1', component: Sandbox1Component },
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