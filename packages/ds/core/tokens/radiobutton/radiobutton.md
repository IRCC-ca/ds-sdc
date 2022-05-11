# Radio button styles

## Usage

### Selectors

The following rules will apply with any of the following html tags

```html
<input type="radio">
```

## Theming

These elements can be included in a custom theme as a mixin.

### Radiobutton

The radiobutton is an element that allows users to check one option. It can be included in a custom theme by adding the following with 2 parameters.

```scss
@use './radiobutton';
@include radiobutton.radiobutton($focus, $critical);
```

The `$focus` property will define checked and unchecked radiobutton color usage variables. The `$critical`properties will define the radiobutton with an invalid error state color palettes.