import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { ColoursComponent } from '../dev/colours/colours.component';
import { DevBlankComponent } from '../dev/dev-blank/dev-blank.component';
import { HomeComponent } from '../home/home.component';
import { InstructionsComponent } from '../instructions/instructions.component';
import { AngularQAComponent } from '../qa/component-qa/angular-qa.component';
import { CoreQAComponent } from '../qa/core-qa/core-qa.component';
import { QABlankComponent } from '../qa/qa-blank/qa-blank.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'instructions', component: InstructionsComponent },
    { path: 'component-qa', component: AngularQAComponent },
    { path: 'qa-blank', component: QABlankComponent },
    { path: 'dev-blank', component: DevBlankComponent },
    { path: 'colours', component: ColoursComponent },
    { path: 'core-qa', component: CoreQAComponent },
];

// configures NgModule imports and exports
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            ...routes,
        ]),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
