/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />


const allureWriter = require('@shelex/cypress-allure-plugin/writer');

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

/**
 * @type {Cypress.PluginConfig}
 */

const path = require('path') 
module.exports = (on, config) => {
  on('before:browser:launch', (browser, args) => {
    console.log(browser.name);
    if(browser.name === 'chrome'){
      const extFolder = path.resolve(__dirname,'..','..','cypress/extensions/ignore-x-frame-headers')
      console.log(extFolder);
      args.push(`--load-extension=${extFolder}`)
      args.push(`--start-fullscreen`)
      return args
    }
  })

}

module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};






























