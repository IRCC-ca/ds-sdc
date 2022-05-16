import { Story, Meta } from '@storybook/angular/types-6-0';
import { RadioButtonComponent } from '@ircc-ca/ds-sdc-angular';

export default {
  title: 'Radio button',
  component: RadioButtonComponent,
} as Meta<RadioButtonComponent>;

const Template: Story<RadioButtonComponent> = (args: RadioButtonComponent) => ({
  props: {...args},
  template: `<jds-radio-button>Angular package radiobutton</jds-radio-button>`
});

export const Default = Template.bind({});

