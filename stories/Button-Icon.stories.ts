import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '@ircc-ca/ds-sdc-angular';

export default {
  title: 'Button Icon',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({})
Primary.args = {

}