# Linters for individual setup <!-- omit in toc -->
- [1. Housekeeping notes](#1-housekeeping-notes)
- [2. Code linters](#2-code-linters)
  - [2.1. Common Notes](#21-common-notes)
    - [2.1.1. Visual Studio Code](#211-visual-studio-code)
      - [2.1.1.1. User vs. Workspace Settings](#2111-user-vs-workspace-settings)
  - [2.2. ESLint](#23-eslint)
    - [2.2.1. Initial Setup](#231-initial-setup)
      - [2.2.1.1. Using NGX Rocket](#2311-using-ngx-rocket)
      - [2.2.1.2. Using Angular Command Line Interface](#2312-using-angular-command-line-interface)
      - [2.2.1.3. Configuration](#2313-configuration)
    - [2.2.2. Integrated Development Environment Setup](#232-integrated-development-environment-setup)
      - [2.2.2.1. Visual Studio Code](#2321-visual-studio-code)
  - [2.3. Prettier](#24-prettier)
    - [2.3.1. Initial Setup](#241-initial-setup)
      - [2.3.1.1. Using NGX Rocket](#2411-using-ngx-rocket)
      - [2.3.1.2. Using Angular Command Line Interface](#2412-using-angular-command-line-interface)
        - [2.3.1.2.1. Installation](#24121-installation)
        - [2.3.1.2.2. Configuration](#24122-configuration)
    - [2.3.2. Integrated Development Environment Setup](#242-integrated-development-environment-setup)
      - [2.3.2.1. Visual Studio Code](#2421-visual-studio-code)
- [3. Style Linters](#3-style-linters)
  - [3.1. stylelint](#31-stylelint)
    - [3.1.1. Initial Setup](#311-initial-setup)
      - [3.1.1.1. Installation](#3111-installation)
      - [3.1.1.2. Configuration](#3112-configuration)
- [4. Markdown Linters](#4-markdown-linters)
  - [4.1. markdownlint](#41-markdownlint)
  - [4.2. Markdown All in One](#42-markdown-all-in-one)
  - [4.3. Alex](#43-alex)
    - [4.3.1. Initial Setup](#431-initial-setup)
    - [4.3.2. Integrated Development Environment Setup](#432-integrated-development-environment-setup)
      - [4.3.2.1. Visual Studio Code](#4321-visual-studio-code)
## 1. Housekeeping notes
This is an opinionated guide, as common linter and formatter setups are inherently opinionated. If you have enhancements or corrections to any of the following information, please don't hesitate to log an Issue or submit a Pull Request.
This guide will assume installation through the Node Package Manager (NPM), however if your project makes use of Yarn (Check for a `yarn.lock` file in your project root or ask a senior.), replace all occurences of the command `npm install --save-dev` with `yarn add -D`, and `npm install` with `yarn install`.
**Note:** For the purpose of consistency across projects, we recommend using NPM when creating a new project.
## 2. Code linters
Many programmers have different styles of writing code. Linters make an effort to standardise these different styles to increase legibility, and are considered a must-have for enterprise level projects. Consistent setups between projects' linters can help with mobility between projects and easier onboarding for new members.
### 2.1. Common Notes
For some Integrated Development Environments (IDEs), some set-up may be desired across projects or across all linters, or some knowledge of the setup process may require a detailed explanation. They follow here
#### 2.1.1. Visual Studio Code
[Visual Studio Code](https://code.visualstudio.com/download) is a highly customizable, extendable IDE. It has many settings that allow customization of everything from visual preferences, to code formatting settings.
##### 2.1.1.1. User vs. Workspace Settings
Frequently, I make reference to `User Settings` or `Workspace Settings` that need to be included. This means these settings will apply on either a user level (only your computer), or on a per-project basis (shared amongst your project team), respectively. Settings that depend on your file system and cannot be committed to a repository should be applied to `User Settings`, while some settings can be tracked through source control to avoid conflicting lint or format settings. These can be set through `Workspace Settings`.
More information is available [here](https://code.visualstudio.com/docs/getstarted/settings)
The following settings should always be desired with all linter and formatter setups. Adding them to your `Workspace Settings` now, or ensuring they are present, will help your team collaborate and avoid conflicts.
Open your settings through `File>Preferences>Settings` or `(Ctrl/Cmd)+,`, then, with the `Workspace` tab selected, open the JSON view by clicking the `Open Settings (JSON)` in the top right hand side of the tab.
```json
  "editor.codeActionsOnSave": {
    "source.organizeImports": true,
    "source.fixAll": true
  },
  "editor.formatOnSave": true,
  "editor.formatOnSaveMode": "modificationsIfAvailable"
```

### 2.3. ESLint
ESLint is a JavaScript linter that can be configured to work with the TypeScript parser.
#### 2.3.1. Initial Setup
The ESLint-Typescript plugin exists to properly integrate ESLint with Typescript.
<https://github.com/typescript-eslint/typescript-eslint>
##### 2.3.1.1. Using NGX Rocket
Rocket will install the (now deprecated) TSLint as part of the install process, and set up links to ESLint.
We want to add the typescript parser into ESLint and remove the TSLint going forward.
run `npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier` to add in the desired packages.
##### 2.3.1.2. Using Angular Command Line Interface
run the following to add the packages to your project.
`npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier`
Angular has deprecated the TSLint implementation in their Command Line Interface (CLI).
Run `ng version` in a terminal and ensure your Angular CLI is at version 12 or higher. Otherwise, run `npm install -g ng` to upgrade.
To upgrade your local copy of the Angular CLI to version 12, run `npm install @angular/cli@12`. This may be necessary due to Angular's version mismatch handling.
Add in the community schematics for ESLint by running `ng add @angular-eslint/schematics`.
Convert your TSLint project to ESLint using `ng g @angular-eslint/schematics:convert-tslint-to-eslint`. If prompted, enter the name of the project as it appears in your `angular.json` under the `projects` key.
##### 2.3.1.3. Configuration
The configuration that follows is intended to enable integration with [Prettier](#15-prettier) later in this guide.
<!--alex disable master-slave-->
For additional information, see <https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#configuration>.
<!--alex enable master-slave-->
Remove the `tslint.json` file from your project root.
We'll need to make some changes to the `eslintrc.json` file as follows.
```json
{
  "root": true,
+ "parser": "@typescript-eslint/parser",
+ "extends": [
+   "prettier"
+ ],
  ...
  "overrides": [
    {
      "files": [
        "*.ts",
+       "*.tsx"
      ],
    ...
    "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
+       "plugin:@typescript-eslint/recommended",
+       "prettier"
      ],
      ...
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended",
+       "prettier"
      ],
      ...
    }
    ...
  ],
  ...
}
```
Run `npm run lint` to ensure the linter has been set up correctly. You should begin seeing errors and warnings flagged with `@typescript-eslint` (If all files pass linting, add a `ngOnInit() {}` line to any component and try again)
Next, create a `.eslintignore` file in the project root with the following content.
```.ignore
# don't ever lint node_modules
node_modules
# don't lint build output (make sure it's set to your correct build folder name)
dist
# don't lint nyc coverage output
coverage
```
#### 2.3.2. Integrated Development Environment Setup
Install the extension for the appropriate Integrated Development Environment
##### 2.3.2.1. Visual Studio Code
VSCode has an extension to show inline errors and warnings based on your ESLint settings. It can be downloaded and installed through the following Marketplace link.
<https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>
### 2.4. Prettier
<https://prettier.io/>
Prettier is an opinionated linter that can be rather polarizing, but has a powerful formatter. Check your project root for a `.prettierrc` file, or your `package.json` for a `prettier` key if you're unsure it is in use in your project.
#### 2.4.1. Initial Setup
Installing Prettier into your project will allow centralization of your team's settings, and is highly recommended. If you're not configuring a new project, proceed to the next section.
##### 2.4.1.1. Using NGX Rocket
If creating a new Angular project using NGX Rocket, make sure to select Prettier code formatting when prompted. By default, the install will create a `prettier` key in the `package.json`. You may wish to move the settings out to a `.prettierrc` file to allow devs to locate the file at a glance.
**Note:** The key in the `package.json` file overrides the `.prettierrc`, so be sure to remove it if desired
##### 2.4.1.2. Using Angular Command Line Interface
###### 2.4.1.2.1. Installation
Open the project root with your choice of terminal.
run `npm install --save-dev --save-exact prettier`. This will add prettier to your project and add a version to your package.lock for installation through a `npm install`.
###### 2.4.1.2.2. Configuration
Create a [Prettier configuration file](https://prettier.io/docs/en/configuration.html). There are many options, I recommend adding a new `.prettierrc` file to the root of your project. This has the benefit of a centralized location for your team, as well as being a strong indicator that prettier is being used at a glance.
A sample starter configuration can be found below in JSON format, but can be customized as needed.
```json
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": true,
    "singleQuote": true,
    "overrides": [
        {
            "files": ".prettierrc",
            "options": {
                "parser": "json"
            }
        }
    ]
}
```
#### 2.4.2. Integrated Development Environment Setup
Install the extension for the appropriate Integrated Development Environment
##### 2.4.2.1. Visual Studio Code
<https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
Install the extension through the marketplace.
To fully enable the addon, open your `Workspace Settings` (**Note:** Please see [User vs. Workspace Settings](#2111-user-vs-workspace-settings)) through `File>Preferences>Settings` or `(Ctrl/Cmd)+,`. We have to include language specific settings, so select the `Workspace` Tab and open the JSON view through the `Open Settings (JSON)` icon in the top right hand corner of the tab.
It's important to set your default formatter to enable Prettier. This can be set for all languages, but is recommended on a per-language basis to avoid unexpected behaviour. The following is the format to follow when overriding features for specific languages.
```json
"[(language)]": {
    "(setting key)": "(desired value)"
  },
```
The following is the recommended list of languages to apply prettier formatting to, and can be copied into your settings. Not all will be relevant, depending on your project language, so select the desired items when setting up the project.
```json
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```
## 3. Style Linters
### 3.1. stylelint
#### 3.1.1. Initial Setup
NGX Rocket created projects will contain stylelint by default. Projects created with the Angular Command Line Interface will require manual installation of the linter, and will be configured to align to Rocket's default setup.
##### 3.1.1.1. Installation
Install the packages via the Node Package Manager (NPM) to the project by running the following command in your project root.
`npm install --save-dev stylelint stylelint-config-standard stylelint-config-recommended-scss stylelint-config-prettier stylelint-scss`
##### 3.1.1.2. Configuration
Create a `.stylelintrc` file in your project root with the following content (Taken from a Rocket project.)
```json
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
    "stylelint-config-prettier"
  ],
  "rules": {
    "font-family-name-quotes": "always-where-recommended",
    "function-url-quotes": [
      "always",
      {
        "except": ["empty"]
      }
    ],
    "selector-attribute-quotes": "always",
    "string-quotes": "double",
    "max-nesting-depth": 3,
    "selector-max-compound-selectors": 3,
    "selector-max-specificity": "0,3,2",
    "declaration-no-important": true,
    "at-rule-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "no-empty-source": null,
    "selector-class-pattern": "[a-z-]+",
    "selector-id-pattern": "[a-z-]+",
    "selector-max-id": 0,
    "selector-no-qualifying-type": true,
    "selector-max-universal": 0,
    "selector-type-no-unknown": [
      true,
      {
        "ignore": ["custom-elements", "default-namespace"]
      }
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        "ignorePseudoElements": ["ng-deep"]
      }
    ],
    "unit-allowed-list": ["px", "%", "em", "rem", "vw", "vh", "deg", "s"],
    "max-empty-lines": 2,
    "max-line-length": 120
  }
}
```
Open your `package.json` in your project root. We will want to add a phase to your lint script. Inside `scripts`, add the following to the content of the `lint` key.
`&& stylelint \"src/**/*.scss\" --syntax scss`
## 4. Markdown Linters
Markdown is a formatting language for documentation (.md files, like this guide!). In an effort to increase frequency and readability of documentation, please install the following.
### 4.1. markdownlint
A Visual Studio Code extension to enable linting of .md files. It can be installed via the following Marketplace link.
<https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint>
### 4.2. Markdown All in One
This formatter adds quick commands to create useful elements in your markdown files, such as a Table of Contents, number headings and code blocks. It can be installed at the following Marketplace link.
<https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one>
### 4.3. Alex
[Alex](https://alexjs.com/) is a linter to catch insensitive or inconsiderate writing, and should be a part of all projects.
#### 4.3.1. Initial Setup
Using the Node Package Manager (NPM), run the following to install the package to your workstation
`npm install --save-dev alex`
create a `.alexrc` file with the following content to your project.
```json
{
  "noBinary": true,
  "profanitySureness": 1
}
```
Open your `package.json`. We want to add an alex phase to our linting script. Inside `scripts`, add the following to the content of the `lint` key.
`&& alex --quiet **.md`
This will run Alex on our Markdown files as part of a build phase to ensure we use accessible language in our documentation.
#### 4.3.2. Integrated Development Environment Setup
##### 4.3.2.1. Visual Studio Code
An extension exists to enable inline warnings for Alex. It can be installed through the following Marketplace link.
<https://marketplace.visualstudio.com/items?itemName=TLahmann.alex-linter>
Open your Visual Studio `Settings` through `File>Preferences>Settings`, or `(Ctrl/Cmd)+,`.
Under `Workspace`, select `Extensions>AlexJS Linter`. These setttings can be changed through the `UI View` or the `JSON View`. To change the settings through JSON, click the `Open Settings (JSON)` with the `Workspace` tab selected.
`Strategy` should be set to  `onType`.
```json
  "alex-linter.strategy": "onType",
```