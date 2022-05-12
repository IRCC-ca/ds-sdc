import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routes } from './routing/app.routing.module';
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
