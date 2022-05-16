module.exports = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "storybook-addon-designs",
    { 
     name: '@storybook/addon-docs',
     options: {
      transcludeMarkdown: true,
     }
    },
    "storybook-addon-pseudo-states",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  }
}