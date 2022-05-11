module.exports = {
  "stories": [
    "../packages/ds/core/**/*.stories.mdx",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    'storybook-addon-designs',
    { 
     name: '@storybook/addon-docs',
     options: {
      transcludeMarkdown: true,
     }
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  }
}