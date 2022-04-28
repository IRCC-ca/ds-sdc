# `ds-sdc-core`

This package contains the theming functionality for the Journey Design System

## Usage

In your root-level stylesheet, initialize the design system with

```scss
@use "~@ircc-ca/ds-sdc-core/index" as ircc-ds;
@include ircc-ds.default();
```

### Element styles

## Notes

A css reset is not currently expected or required.
This package is intended to apply with minimal effort based on HTML tags and minimal use of class selectors to reduce overhead in existing projects.
As this project is a work in progress, usage of multiple design systems is recommended, so long as they don't visually conflict.
If you find an issue, [please submit a Bug or Feature Request on our Github](https://github.com/IRCC-ca/ds-sdc/issues/new/choose) and add the `core` tag
