import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IConfig } from 'packages/ds/angular/src/lib/jl-cl/jl-cl/IFormBase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample';

  config = {
    id: 'firstName',
    type: 'input',
    label: 'test label',
    hint: 'test test',
    placeholder: '',
  } as IConfig;

  constructor(private translate: TranslateService) {}
}
