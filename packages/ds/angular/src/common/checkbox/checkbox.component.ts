import { Component, Input } from '@angular/core';

@Component({
  selector: 'jds-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent { 
  @Input() size?: 'small' | 'large' = 'large';
  @Input() ariaLabel?: string;
  @Input() disabled?: boolean;
}
