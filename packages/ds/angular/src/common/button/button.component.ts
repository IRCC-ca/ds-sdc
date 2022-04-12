import { Component, Input } from '@angular/core';

@Component({
  selector: 'jds-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent{

  @Input() category?: 'primary' | 'secondary' | 'plain' = 'primary';
  @Input() size?: 'small' | 'large' = 'large';
  @Input() color?: 'critical' | 'CTA' = 'CTA';
  @Input() iconPosition?: 'left' | 'right' = 'left';
  @Input() type?: 'button' | 'submit' | 'reset' = 'button';
  @Input() ariaLabel?: string;

  constructor() { }

}
