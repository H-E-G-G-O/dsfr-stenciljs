import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'core',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'components/**/*.html' },
        { src: './../node_modules/@gouvfr/dsfr/dist/utility', dest: 'utility' },
        { src: './../node_modules/@gouvfr/dsfr/dist/icons', dest: 'icons' },
        { src: './../node_modules/@gouvfr/dsfr/dist/fonts', dest: 'fonts' },
      ],
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [
        { src: 'components/**/*.html' },
        { src: './../node_modules/@gouvfr/dsfr/dist/icons', dest: 'icons' },
        { src: './../node_modules/@gouvfr/dsfr/dist/fonts', dest: 'fonts' },
        { src: './../node_modules/@gouvfr/dsfr/dist/fonts', dest: 'components/fonts' },
      ],
      serviceWorker: null, // disable service workers
    },
  ],
};
