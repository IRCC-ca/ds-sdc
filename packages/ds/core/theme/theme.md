# Theme

Functionality relating to theming the design system

## IRCC JL Colours

This includes the color palettes used in JourneyLab applications, and the color usage definition.

## Theme

Theming functionality for the core design system package. Only one theme should be initialized at a time, and will create both light and dark modes, which will be active based on user settings. [See Util Theme for more details](../util/theme.md)

A custom theme can be created by calling the desired element styles package constructors with the desired color usage, and including the `required-common-theme` mixin.

### Required common theme

This mixin is used to define the common elements used in all themes. There are 2 common parameters at this time, and it can be called as follows.

```scss
@use './theme';
@include theme.required-common-theme($palette, $size);
```

#### Palette

An identifier key used to generate the color usage tokens throughout this package. This will reference a map identified within the `$journeylab-palette` constant [declared in the color palette](./_ircc-jl-colors.scss).

#### Size

An identifier key used to generate the default size of the elements, as defined through text and padding. This will reference the `$sizes` map [declared in size utilities](../util/_size.scss).

### Default

Definition of the default theme through the `default` mixin, and includes the expected element styling configuration. It can be called as follows.

```scss
@use './theme';
@include theme.default($palette, $size);
```