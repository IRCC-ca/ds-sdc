import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '@ircc-ca/ds-sdc-angular';

export default {
  title: 'Button',
  component: ButtonComponent,
  args: {
    ngContent: 'Label',
  }
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args) => ({
  props: {...args},
  template: `<jds-button 
    [category]="category"
    [ariaLabel]="ariaLabel"
    [color]="color"
    [size]="size"
    [type]="type"
    >{{ ngContent }}</jds-button>`
});

// TODO: temp until the styling is fixed
// [disabled]="disabled"

export const Default = Template.bind({});
Default.args = {
  ariaLabel: 'aria text',
  category: 'primary',
  disabled: false
}

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
}