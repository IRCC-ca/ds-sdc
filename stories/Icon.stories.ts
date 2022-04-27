import { Story, Meta } from '@storybook/angular/types-6-0';
import { IconComponent, IIconConfig } from '@ircc-ca/ds-sdc-angular';
import { LinkComponent } from 'packages/ds/angular/src/public-api';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent, LinkComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta<IconComponent>;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: {...args},
  template: `<jds-font-icon [iconConfig]="iconConfig"></jds-font-icon>`
});

export const Default = Template.bind({});
const configDefault: IIconConfig = {
  unicode: 'f6b0',
  fontFamily: 'fa-solid',
}
Default.args = { 
  iconConfig: configDefault
}
