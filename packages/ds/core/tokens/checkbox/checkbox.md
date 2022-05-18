# Checkbox styles
## Usage

### Selectors

The following rules will apply with any of the following html tags

```html
<input type="checkbox">
```

## Theming

These elements can be included in a custom theme as a mixin.

### Checkbox

The checkbox is an element that allow users to select and/or unselected multiples items. It can be included in a custom theme by adding the following with 3 parameters.

```scss
@use './checkbox';
@include checkbox.checkbox($focus, $critical);
```

The `$focus` property will define checked and unchecked radiobutton color usage variables. The `$critical`properties will define the radiobutton with an invalid error state color palettes.

// TODO: mentioned about mixed state