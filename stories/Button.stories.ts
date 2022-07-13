import { CommonModule } from '@angular/common';
import { IRCCModule } from '@ircc-ca/ds-sdc-angular';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';

enum Color {
    critical = 'critical',
    cta = 'CTA',
}
enum Type {
    button = 'button',
    submit = 'submit',
    reset = 'reset',
}
enum Category {
    primary = 'primary',
    secondary = 'secondary',
    plain = 'plain',
}

enum Size {
    small = 'small',
    large = 'large',
}
interface ButtonProps {
    disabled?: boolean;
    name?: string;
    color?: Color | string;
    type?: Type | string;
    value?: string;
    category?: Category | string;
    size?: Size | string;
    ariaLabel?: string;
}

export default {
    title: 'Components/Button',
    args: {
        ngContent: 'Label',
    },
    argTypes: {
        color: {
            description: 'Colors for button (optional)',
            options: [Color.cta, Color.critical],
            control: { type: 'radio' },
        },
        size: {
            description: 'Size for button (optional)',
            options: [Size.small, Size.large],
            control: { type: 'radio' },
        },
        category: {
            description: 'Category for button (optional)',
            options: [Category.primary, Category.secondary, Category.plain],
            control: { type: 'radio' },
        },
        type: {
            description: 'Type for button (optional)',
            options: [Type.button, Type.reset, Type.submit],
            control: { type: 'radio' },
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/16zKKXc4pzBdRAXmbz6Ht4/Components?node-id=8%3A62',
        },
    },
    decorators: [
        moduleMetadata({
            imports: [CommonModule, IRCCModule],
        }),
    ],
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => ({
    props: { ...args },
    template: `<djl-button
        color="${args.color}"
        category="${args.category}"
        size="${args.size}"
        disabled="${args.disabled}"
        type="${args.type}"
        aria-label="${args.ariaLabel}"
        name="${args.name}"
        value="${args.value}"
        >{{ngContent}}</djl-button
    >`,
});

export const Default = Template.bind({});
Default.args = {
    color: Color.cta,
    category: Category.primary,
    disabled: false,
    size: Size.small,
    type: Type.button,
    ariaLabel: 'This is an aria-label',
    name: 'Stencil btn',
    value: 'stencil',
};
