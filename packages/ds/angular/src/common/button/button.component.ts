import { Component, Input } from '@angular/core';

@Component({
    selector: 'jds-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() category?: 'primary' | 'secondary' | 'plain';
    @Input() size?: 'small' | 'large';
    @Input() color?: 'critical' | 'CTA';
    @Input() type?: 'button' | 'submit' | 'reset';
    @Input() ariaLabel?: string;
    @Input() disabled?: boolean;
}
