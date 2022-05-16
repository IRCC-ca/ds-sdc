import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent, IconComponent, IIconConfig } from '@ircc-ca/ds-sdc-angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  args: {
    ngContent: 'Label',
  },
  parameters: {
    design: {
      type: 'figma',
      url:'https://www.figma.com/file/16zKKXc4pzBdRAXmbz6Ht4/Components?node-id=8%3A62'
    }
  },
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, IconComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args) => ({
  props: {...args},
  template: `<jds-button 
    [category]="category"
    [ariaLabel]="ariaLabel"
    [color]="color"
    [size]="size"
    [type]="type"
    [disabled]="disabled"
    >{{ ngContent }}</jds-button>`
});

export const Primary = Template.bind({});
Primary.args = {
  ariaLabel: 'aria text',
  category: 'primary',
  disabled: false
}

export const Secondary = Template.bind({});
Secondary.args = {
  ariaLabel: 'aria text',
  category: 'secondary',
  disabled: false
}

export const Plain = Template.bind({})
Plain.args = {
  ariaLabel: 'aria text',
  category: 'plain',
  disabled: false
}

export const Disabled = Template.bind({});
Disabled.args = {
  category: 'primary',
  disabled: true
}

export const ButtonWithIconAndText: Story<IconComponent> = (args) => ({
  props: {
    ...args,
  },
  template: `<jds-button 
  [category]="category"
  [ariaLabel]="ariaLabel"
  [color]="color"
  [size]="size"
  [type]="type"
  [disabled]="disabled"
  >
  <jds-font-icon [iconConfig]="iconConfig"></jds-font-icon>
  {{ ngContent }}</jds-button>`
});

const BtnConfig: IIconConfig = {
  fontFamily: 'fa-solid',
  unicode: 'f6b0'
}

ButtonWithIconAndText.args = {
  iconConfig: BtnConfig,
}


export const ButtonWithIcon: Story<IconComponent> = (args) => ({
  props: {
    ...args,
  },
  template: `<jds-button 
  [category]="category"
  [ariaLabel]="ariaLabel"
  [color]="color"
  [size]="size"
  [type]="type"
  [disabled]="disabled"
  >
  <jds-font-icon [iconConfig]="iconConfig"></jds-font-icon>
  </jds-button>`
});

const BtnIconConfig: IIconConfig = {
  fontFamily: 'fa-solid',
  unicode: 'f6b0'
}

ButtonWithIcon.args = {
  iconConfig: BtnIconConfig
}
