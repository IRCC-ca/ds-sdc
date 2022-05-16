import { Story, Meta } from '@storybook/angular/types-6-0';
import { RadioButtonComponent } from '@ircc-ca/ds-sdc-angular';

export default {
  title: 'Components/Radio button',
  component: RadioButtonComponent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/16zKKXc4pzBdRAXmbz6Ht4/Components?node-id=175%3A3907'
    }
  }
} as Meta<RadioButtonComponent>;

const Template: Story<RadioButtonComponent> = (args: RadioButtonComponent) => ({
  props: {...args},
  template: `<jds-radio-button>Angular package radiobutton</jds-radio-button>`
});

export const Default = Template.bind({});

