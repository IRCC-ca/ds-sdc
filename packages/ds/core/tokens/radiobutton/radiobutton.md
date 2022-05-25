# Radio button styles

## Usage

### Selectors

The following rules will apply with any of the following html tags

```html
<input type="radio" />
```

### Attributes

The following sections outline the categories that may be used to customize the look and feel of the element

#### Size

Defaults to the configured size at the application level. `size="large"` is the default.

This attribute defines the radio button checked size (width and height) to inherit, as follows:

```html
<input type="radio" size="setting" />
```

The values accepted are:

- small
- large

#### Checked

The radio button defaults to not checked. If the user select the radio button, the style will set checked that can't be overwrite using the palette `$focus`. If the radio button is invalid will be using the palette `$critical`.

```html
<input type="radio" checked />
```


