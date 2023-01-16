# Disable

This class describes common functionality that applies to all elements that are non-intractable.

## Usage

This applies to any element with the `:disabled` pseudoclass.

Should you override the styling of the pseudoclass and lose functionality, it can be re-added to your element by using the following.

```scss
@use './disable';
&:disabled {
    @include disable.selector() {
        @include disable.layout();
    }
}
```

If an element requires specific styling, these styles can be overridden.

These elements are not configurable at this time.

## Theming

The focus outline can be included in a custom theme by adding the following with one parameter.

```scss
@use './focus';
@include focus.focus($palette);
```

This mixin can be called with `$palette` defining the color usage, and create the appropriate variables on the selector group.
