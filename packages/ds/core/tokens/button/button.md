# Button styles

## Usage

### Selectors

The following rules will apply with any of the following html tags

```html
<button></button>

```

### Attributes

The following sections outline the categories that may be used to customize the look and feel of the element

#### Category

Defaults to `category="primary"` if unset.

The visual token layout can be customized with the `category` attribute as follows

```html
<element category="value"></element>
```

The values accepted in the default component inclusion list are:

- primary
- secondary
- plain
- round

#### Color

Defaults to `color="cta"` if unset.

This attribute is used to select which color palette in the theme to reference, and not a singular static color to set. The color palette usage can be set using the `color` attribute as follows:

```html
<element color="cta"></element>
```

The values accepted in the default theme are:

- cta
- critical

#### Size

Defaults to the configured size at the application level. `size="large"` is the default.

This attribute defines the text level to inherit, as well as the amount of padding used. This can be overridden at the instance level, though it is not recommended, as follows:

```html
<element size="setting"></element>
```

The values accepted are:

- small
- large

## Theming

These elements can be included in a custom theme as a mixin.

### Primary

The primary button is a solid single color button. It can be included in a custom theme by adding the following with 2 parameters.

```scss
@use './primary';
@include primary.button-primary($palette, $text-palette);
```

The mixin can be called any number of times with `$palette` defining a new `category` as above, and create the appropriate variables on the selector group for that category. The `$text-palette` property will create variables in the selector that define the colors used in the text.

### Secondary

The secondary button is an outline single color button. It can be included in a custom theme by adding the following with 1 parameter.

```scss
@use './secondary';
@include secondary.button-secondary($palette);
```

The mixin can be called any number of times with `$palette` defining a new `category` as above, and create the appropriate variables on the selector group for that category.

### Plain

The plain button is a single color text button. It can be included in a custom theme by adding the following with 1 parameter.

```scss
@use './plain';
@include plain.button-plain($palette);
```

The mixin can be called any number of times with `$palette` defining a new `category` as above, and create the appropriate variables on the selector group for that category.

### Round

The round button is a single color text button, with a 1:1 aspect ratio and rounded borders. It can be included in a custom theme by adding the following with 1 parameter.

```scss
@use './round';
@include round.button-round($palette);
```

The mixin can be called any number of times with `$palette` defining a new `category` as above, and create the appropriate variables on the selector group for that category.
