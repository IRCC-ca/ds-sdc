# `ds-sdc-react`

**UNDER DEVELOPMENT and not ready to be used** 

This package contains React components for the Digital Journey Labs Design System

## Getting started 

To install the IRCC Digital Journey Labs Design System React components, you will need to run the following command using [npm](https://www.npmjs.com/):

```
npm install --save-dev @ircc-ca/ds-sdc-react
```

## Usage

To use a component, you can import it in the <component>.tsx from the package as the following example: 

```typescript
import { DjlButton } from '@ircc-ca/ds-sdc-react';

function App() {
    return (
        <div>
            <DjlButton color="critical" category="primary" type="button">
                Red button
            </DjlButton>
        </div>
    );
}

export default App;

```