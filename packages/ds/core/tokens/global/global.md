# Global

## Global

Creates tokens relating to generic global elements, including surface and form control common colors.

### Usage

These tokens are used in a variety of dependent files, provide no functionality on their own, but can be referenced once they're initialized on the style root.

### Theming

The tokens can be generated in a custom theme through the `global` mixin with 2 properties as follows

```scss
@use './global';
...
@include global.global($neutral, $accent);
```

#### Neutral

The neutral color palette key as identified in the color theme. This is `neutral` in the default theme.

#### Accent

The accent color palette key as identified in the color theme. This is `selected` in the default theme.

## Text Global

Creates tokens relating to common text elements.

### Usage

These tokens are used in a variety of dependent files, provide no functionality on their own, but can be referenced once they're initialized on the style root.

### Theming

The tokens can be generated in a custom theme through the `text-global` mixin with 1 property as follows

```scss
@use './text-global';
...
@include text-global.text-global($palette);
```

#### Palette

The color palette key as identified in the color theme. This is `neutral` in the default theme.