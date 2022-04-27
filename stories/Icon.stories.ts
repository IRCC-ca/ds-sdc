import { Story, Meta } from '@storybook/angular/types-6-0';
import { IconComponent, IIconConfig } from '@ircc-ca/ds-sdc-angular';

export default {
  title: 'Icon',
  component: IconComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
});

export const Default = Template.bind({});
const configDefault: IIconConfig = {
  unicode: 'f6b0',
  fontFamily: 'fa-solid',
}
Default.args = { 
  iconConfig: configDefault,
  isHidden: false
}

