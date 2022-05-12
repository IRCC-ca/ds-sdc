import { Story, Meta } from '@storybook/angular/types-6-0';
import { LinkComponent } from '@ircc-ca/ds-sdc-angular/src/common/link';
import { IconComponent } from '@ircc-ca/ds-sdc-angular/src/common/icon';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Link',
  component: LinkComponent,
  args: {
    ngContent: 'Link'
  },
  decorators: [
    moduleMetadata({
      declarations: [LinkComponent, IconComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta<LinkComponent>;

const Template: Story<LinkComponent> = (args: LinkComponent) => ({
  props: {...args},
  template: `
    <jds-link 
    [download]="download"
    [href]="href"
    [target]="target"
    [ariaLabel]="ariaLabel"
    >{{ ngContent }}</jds-link>
  `
});

export const Default = Template.bind({})
Default.args = { 
  ariaLabel:'aria',
  href: 'https://www.github.com',
  target: '_blank'
}