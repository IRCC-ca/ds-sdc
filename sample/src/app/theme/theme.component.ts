import { Component } from '@angular/core';

@Component({
    selector: 'jds-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss'],
})
export class ThemeSelectComponent {
    dark() {
        document.getElementById('root')?.setAttribute('theme', 'dark');
    }
    light() {
        document.getElementById('root')?.setAttribute('theme', 'light');
    }
}
