import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';

export default defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: '**/*.feature',
    supportFile: 'cypress/support/e2e.ts',
    video: true,
    videosFolder: 'cypress/videos',
    experimentalSessionAndOrigin: true,
    async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        } as any)
      );

      return config;
    },
  },
});
