import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { IFieldConfig } from 'packages/ds/angular/src/lib/jl-cl/jl-cl/IFormBase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample';

  constructor(private translate: TranslateService) {}
}
