import { CommonModule } from '@angular/common';
import { IconComponent, IIconConfig } from '@ircc-ca/ds-sdc-angular/icon';
import { LinkComponent } from '@ircc-ca/ds-sdc-angular/link';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';

export default {
    title: 'Components/Icon',
    component: IconComponent,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/16zKKXc4pzBdRAXmbz6Ht4/Components?node-id=40%3A1643',
        },
    },
    decorators: [
        moduleMetadata({
            declarations: [IconComponent, LinkComponent],
            imports: [CommonModule],
        }),
    ],
} as Meta<IconComponent>;

const Template: Story<IconComponent> = (args: IconComponent) => ({
    props: { ...args },
    template: `<jds-font-icon [iconConfig]="iconConfig"></jds-font-icon>`,
});

export const Default = Template.bind({});
const configDefault: IIconConfig = {
    unicode: 'f6b0',
    fontFamily: 'fa-solid',
};
Default.args = {
    iconConfig: configDefault,
};
