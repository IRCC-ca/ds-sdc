import { Story } from '@storybook/angular';
import type { Meta } from '@storybook/angular';

import { HeaderComponent } from '@ircc-ca/ds-sdc-angular/src/common/header'

export default {
  title: 'Components/Header',
  component: HeaderComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/16zKKXc4pzBdRAXmbz6Ht4/Components?node-id=958%3A3344'
      } 
    }
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const header = Template.bind({});