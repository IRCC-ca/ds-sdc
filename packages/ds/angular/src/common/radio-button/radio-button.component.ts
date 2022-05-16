import { Component, Input } from '@angular/core';

@Component({
  selector: 'jds-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent  { 
  @Input() size?: 'small' | 'large';
  @Input() ariaLabel?: string;
  @Input() disabled?: boolean;
}
