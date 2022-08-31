import { newE2EPage } from '@stencil/core/testing';

describe('djl-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<djl-link></djl-link>');

    const element = await page.find('djl-link');
    expect(element).toHaveClass('hydrated');
  });
});
