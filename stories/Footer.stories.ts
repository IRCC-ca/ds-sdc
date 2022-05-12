// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FooterComponent } from '@ircc-ca/ds-sdc-angular/src/common/footer';

export default {
  title: 'Footer',
  component: FooterComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
});

export const footer = Template.bind({});