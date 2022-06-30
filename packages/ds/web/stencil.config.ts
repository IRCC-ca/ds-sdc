import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'web',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@ircc-ca/ds-sdc-web',
      directivesProxyFile: '../angular/src/stencil-generated/components.ts',
    }),
    reactOutputTarget({
      componentCorePackage: '@ircc-ca/ds-sdc-web',
      proxiesFile: '../react/lib/stencil-generated/components.ts',
      loaderDir: 'dist/loader',
    }),
  ],
};
