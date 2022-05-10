import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IIconConfig } from '@ircc-ca/ds-sdc-angular';
import { TranslateService } from '@ngx-translate/core';
import { routes } from './routing/app.routing.module';
// import { IFieldConfig } from 'packages/ds/angular/src/lib/jl-cl/jl-cl/IFormBase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    title = 'sample';

    // config = {
    //   id: 'firstName',
    //   type: 'input',
    //   label: 'test label',
    //   hint: 'test test',
    //   placeholder: '',
    // } as IFieldConfig;

    alicornIconConfig = {
        unicode: 'f6b0',
        fontFamily: 'fa-solid',
    } as IIconConfig;

    rocketIconConfig = {
        unicode: 'e027',
        fontFamily: 'fa-solid',
    } as IIconConfig;

    constructor(private translate: TranslateService, private router: Router) {}

    findRoute(dir = 1) {
        const route = this.router.url.replace('/', '');
        let newIndex =
            routes.findIndex((routerRoute) => {
                return routerRoute.path === route;
            }) + dir;
        switch (Math.sign(dir)) {
            case 1:
                newIndex = newIndex % routes.length;
                break;
            case -1:
                newIndex = (newIndex + routes.length) % routes.length;
                break;
        }
        const newPath = routes[newIndex].path;
        this.router.navigate([newPath]);
    }
}
