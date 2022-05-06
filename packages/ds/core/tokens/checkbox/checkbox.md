# Checkbox styles
## Usage

### Selectors

The following rules will apply with any of the following html tags

```html
<input type="checkbox">
```

## Theming

These elements can be included in a custom theme as a mixin.

### Link

The checkbox is an element that allow users to select and/or unselected multiples items. It can be included in a custom theme by adding the following with 3 parameters.

```scss
@use './checkbox';
@include checkbox.checkbox($palette, $focus, $critical);
```

The mixin can be called once with `$palette` defining the unselected checkbox color usage variables. The `$focus` property will define select checkbox color usage variables. The `$critical`properties will define the checkbox with errors color palettes.