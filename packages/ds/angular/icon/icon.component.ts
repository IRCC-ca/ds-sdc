import { Component, Input } from '@angular/core';

export const FONT_FAMILIES = {
    ['fa-solid']: null,
    ['fa-thin']: null,
    ['fa-light']: null,
    ['fa-regular']: null,
    ['fa-brands']: null,
};

export interface IIconConfig {
    ariaLabel?: string;
    unicode: string;
    fontFamily: keyof typeof FONT_FAMILIES;
}

@Component({
    selector: 'jds-font-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
    @Input() iconConfig!: IIconConfig;

    public get formattedIcon(): string {
        return "'" + '\\' + this.iconConfig.unicode + "'";
    }

    public get isHidden(): boolean {
        return this.iconConfig.ariaLabel === '';
    }
}
