import { CommonModule } from '@angular/common';
import { FooterComponent } from '@ircc-ca/ds-sdc-angular/footer';
import { HeaderComponent } from '@ircc-ca/ds-sdc-angular/header';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { userEvent, within } from '@storybook/testing-library';
import Page from './page.component';

export default {
    title: 'Example/Page',
    component: Page,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
        layout: 'fullscreen',
    },
    decorators: [
        moduleMetadata({
            declarations: [FooterComponent, HeaderComponent],
            imports: [CommonModule],
        }),
    ],
} as Meta;

const Template: Story<Page> = (args: Page) => ({
    props: args,
});

export const LoggedOut = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/angular/writing-tests/interaction-testing
export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', { name: /Log in/i });
    await userEvent.click(loginButton);
};
