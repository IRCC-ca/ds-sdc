import { CheckboxComponent } from '@ircc-ca/ds-sdc-angular/checkbox';
import { Meta, Story } from '@storybook/angular/types-6-0';

export default {
    title: 'Components/Checkbox',
    component: CheckboxComponent,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/16zKKXc4pzBdRAXmbz6Ht4/Components?node-id=175%3A3907',
        },
    },
} as Meta<CheckboxComponent>;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
    props: { ...args },
    template: `<jds-checkbox>Angular package checkbox</jds-checkbox>`,
});

export const Default = Template.bind({});
