import { Story, Meta } from '@storybook/angular/types-6-0';
import { FooterComponent } from '@ircc-ca/ds-sdc-angular';

export default {
  title: 'Components/Footer',
  component: FooterComponent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/16zKKXc4pzBdRAXmbz6Ht4/Components?node-id=958%3A3355'
    } 
  }
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
});

export const footer = Template.bind({});