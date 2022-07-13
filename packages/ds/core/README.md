# `ds-sdc-core`

This package contains the theming functionality for the Journey Design System

## Getting started

To install the IRCC Digital Journey Labs Design System styles, you will need to run the following command using [npm](https://www.npmjs.com/):

```
npm install --save-dev @ircc-ca/ds-sdc-core
```

## Usage

In your root-level stylesheet, initialize the design system with

```scss
@use '~@ircc-ca/ds-sdc-core/index' as ircc-ds;
@include ircc-ds.theme-init-required(ircc-ds.palette-journeylab(), default, large);
@include ircc-ds.element-styles();
```

A list of elements can be passed to `element-styles` to include, should only certain element styles be desired.

### Element style tokens and layouts

- [Button](./tokens/button/button.md)
- [Checkbox](./tokens/checkbox/checkbox.md)
- [Global](./tokens/global/global.md)
- [Link](./tokens/link/link.md)
- [Radiobutton](./tokens/radiobutton/radiobutton.md)

#### Partials

- [Disable](./tokens/partial/disable.md)
- [Focus](./tokens/partial/focus.md)

- [Layout](./layout/layout.md)
- [Paint](./paint/paint.md)
- [Snapins material](./snapins/_material.scss)

### Constant tokens

- [Common size constants](./tokens/_sizes.scss)
- [Template constants](./tokens/_template-const.scss)
- [Font sizes and families](./tokens/_text.scss)

### Typography

- [Fontawesome imports and declarations](./typography/_fa-wrapper.scss)
- [Heading and Body imports and declarations](./typography/_fonts.scss)
- [Typography levels and usage declarations](./typography/_typography.scss)

### Utilities

- [Color mode and token](./util/_color.scss)
- [Size mode and token](./util/_size.scss)
- [Theming utilities for contextual css](./util/_theme.scss)
- [Device capabilities and user contextual settings](./util/_device.scss)
- [Additional Integer related math](./util/_integer.scss)
- [Additional functions for Sass Lists](./util/_list.scss)
- [Additional functions for Sass Strings](./util/_string.scss)

## Notes

A css reset is not currently expected or required, if you are experiencing an unexpected visual bug, please submit a Bug.
This package is intended to apply with minimal effort based on HTML tags and minimal use of class selectors to reduce overhead in existing projects.
As this project is a work in progress, usage of multiple design systems is recommended, so long as they don't visually conflict.
If you find an issue, [please submit a Bug or Feature Request on our Github](https://github.com/IRCC-ca/ds-sdc/issues/new/choose) and add the `core` tag.
