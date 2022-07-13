import { DjlButton, MyComponent } from '@ircc-ca/ds-sdc-react';
import './styles.scss';

function App() {
    return (
        <div>
            <MyComponent first="Stencil" last="Component"></MyComponent>
            <DjlButton color="CTA" category="plain">
                React Stencil Button
            </DjlButton>
            <br />
            <DjlButton color="critical" category="primary" type="button">
                Red button
            </DjlButton>
            <br />
            <DjlButton disabled={true}>Disabled</DjlButton>
            <br />
            <DjlButton category="secondary" aria-label="something" size="small">
                small button
            </DjlButton>
        </div>
    );
}

export default App;
