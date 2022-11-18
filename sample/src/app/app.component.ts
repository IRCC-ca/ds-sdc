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

    constructor(public translate: TranslateService, private router: Router) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
    }

    switchLang(lang: string) {
        this.translate.use(lang);
    }

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

    goToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    handleNav(path: string) {
        this.router.url !== path ? this.router.navigateByUrl(path) : null;
    }
}
