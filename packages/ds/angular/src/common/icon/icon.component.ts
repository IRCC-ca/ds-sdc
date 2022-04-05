import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'font-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {

  @Input() unicode!: string;
  @Input() fontFamily!: string;
  @Input() ariaLabel?: string;

  constructor() { }

  public get isHidden(): boolean {
      return(
        this.ariaLabel === ''
      );
  }

  ngOnInit(): void {
  }

}
