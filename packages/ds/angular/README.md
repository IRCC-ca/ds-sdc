# `ds-sdc-angular`

**UNDER DEVELOPMENT and not ready to be used** 

This package contains Angular components for the Digital Journey Labs Design System

## Getting started 

To install the IRCC Digital Journey Labs Design System Angular components, you will need to run the following command using [npm](https://www.npmjs.com/):

```
npm install --save-dev @ircc-ca/ds-sdc-angular
```

## Usage

| Package name  | Description  |   |
|---|---|---|
| [`@ircc-ca/ds-sdc-angular/button`](./button/)  | Angular custom button  |   |
| [`@ircc-ca/ds-sdc-angular/checkbox`](./checkbox/)  | Angular custom checkbox  |   |
| [`@ircc-ca/ds-sdc-angular/footer`](./footer/)  | Angular custom footer  |   |
| [`@ircc-ca/ds-sdc-angular/header`](./header/)  | Angular custom header  |   |
| [`@ircc-ca/ds-sdc-angular/icon`](./icon/)  |  Angular custom icon |   |
| [`@ircc-ca/ds-sdc-angular/link`](./link/)  | Angular custom link  |   |
| [`@ircc-ca/ds-sdc-angular/radiobutton`](./radio-button/)  | Angular custom radio-button  |   |

Include the `CUSTOM_ELEMENTS_SCHEMA` in the modules that use the components.

To use a component, you can import it in the component module from the package: 

```typescript
import { JLButtonModule } from '@ircc-ca/ds-sdc-angular/button';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        JLButtonModule,
        AppRoutingModule,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule {}

```