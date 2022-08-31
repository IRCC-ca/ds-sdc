import { newSpecPage } from '@stencil/core/testing';
import { DjlLink } from '../djl-link';

describe('djl-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DjlLink],
      html: `<djl-link></djl-link>`,
    });
    expect(page.root).toEqualHtml(`
      <djl-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </djl-link>
    `);
  });
});
