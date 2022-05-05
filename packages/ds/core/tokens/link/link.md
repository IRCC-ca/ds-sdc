# Link styles

## Usage

### Selectors

The following rules will apply with any of the following html tags

```html
<a></a>
// any element with the class of "link"
<element class="link"></element>
```

## Theming

These elements can be included in a custom theme as a mixin.

### Link

The link is a text element that can redirect users to a new page. It can be included in a custom theme by adding the following with 2 parameters.

```scss
@use './link';
@include link.link($palette, $visited-palette);
```

The mixin can be called once with `$palette` defining the unvisited link color usage variables. The `$visited-palette` property will define the visited link color usage variables.
