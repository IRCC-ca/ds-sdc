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

Defaults to `color="cta"` if unset in the default theme.

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

Each button can be included seperately as part of a custom theme, by calling the `create` mixin and passing in the required map. The first color role passed will determine the default

### Primary

```scss
@use './primary';
$palette: ((role: cta, text: neutral));
/// within rule
@include primary.create($palette);
```

As the primary button uses 2 color palettes, the mixin can be called by passing a list of maps, following the format above. The name of the color role is derived from the `role` attribute, and the `text` is tied to the corresponding object.

### Plain / Secondary / Round

``` scss
@use './(button category)';
$palette: (cta);
/// within rule
@include (button category).create($palette);
```

The plain, secondary, and round buttons use a single color palette, and can be called by passing a list of color roles, following the format above.

### Nav

Nav buttons follow the theme of the `selected` and `text-global` token lists, and cannot be themed directly.
