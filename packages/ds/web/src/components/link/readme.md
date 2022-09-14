# djl-link

## Usage
```html
<djl-link href="#">Test blank link</djl-link><br/>
<djl-link href="https://github.com/" target="_self">Test Web link</djl-link><br/>
<djl-link download="https://github.com/" href="#" target="_blank">Test Download link</djl-link><br/>
<djl-link href="mailto:test@example.com" target="_blank">Test Email link</djl-link><br/>
<djl-link href="tel:7788888888" target="_blank">Test Phone link</djl-link>
```

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute        | Description                                                                                                                                   | Type                                         | Default     |
| ------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------- |
| `djlAriaLabel`      | `djl-aria-label` |                                                                                                                                               | `string`                                     | `undefined` |
| `download`          | `download`       | If developer is specifying a download in the href, they need to specify a download name in order for the "download icon" to appear next to it | `string`                                     | `undefined` |
| `href` _(required)_ | `href`           |                                                                                                                                               | `string`                                     | `undefined` |
| `target`            | `target`         |                                                                                                                                               | `"_blank" \| "_parent" \| "_self" \| "_top"` | `undefined` |


## Dependencies

### Depends on

- [djl-icon](../icon)

### Graph
```mermaid
graph TD;
  djl-link --> djl-icon
  style djl-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
