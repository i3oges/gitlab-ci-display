const tsPreprocessor = require('./ts-preprocessor');
const dotenv = require('dotenv');
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  on('file:preprocessor', tsPreprocessor);
  dotenv.config();
  config.env.GITLAB_URL = process.env.GITLAB_URL;
  config.env.GITLAB_PRIVATE_TOKEN = process.env.GITLAB_PRIVATE_TOKEN;
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  return config;
}
