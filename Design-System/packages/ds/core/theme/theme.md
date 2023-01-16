# Theme

Functionality relating to theming the design system

## IRCC JL Colours

This includes the color palettes used in JourneyLab applications, and the color usage definition.

## Theme

Theming functionality for the core design system package. Only one theme should be initialized at a time, and will create both light and dark modes, which will be active based on user settings. [See Util Theme for more details](../util/theme.md)

A custom theme can be created by calling the desired element styles package constructors with the desired color usage, and including the `required-common-theme` mixin.

### Init Required

This mixin is used to initialize the variables used for generation of the themeable elements. There are 3 parameters at this time, and it can be called as follows.

```scss
@use '@ircc-ca/ds-sdc-core/index' as ircc-ds; 
@include ircc-ds.theme-init-required($root-palette, $palette, $size);
```

#### Root-palette

The object that defines the colour palettes used in the application, including the theme, the colour usages, and the HSL values for each shade.

#### Palette

An identifier key used to generate the color usage tokens throughout this package. This will reference the palette key within the `$root-palette`.

#### Size

An identifier key used to generate the default size of the elements, as defined through text and padding. This will reference the `$sizes` map [declared in size utilities](../util/_size.scss).

### All Element Tokens

This is an ease of use mixin to define the theme tokens for every element layout in the system.
