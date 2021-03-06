'use strict';

module.exports = {
  capabilities: {
    'browserstack.selenium_version': '2.45.0'
  },
  environments: [
    /*{ browserName: 'internet explorer', version: '11', platform: 'WIN8' },
     { browserName: 'firefox', version: '37', platform: [ 'WINDOWS', 'MAC' ] },
     { browserName: 'chrome', version: '39', platform: [ 'WINDOWS', 'MAC' ] },
     { browserName: 'safari', version: '8', platform: 'MAC' }*/
  ],
  maxConcurrency: 2,
  tunnel: 'BrowserStackTunnel',
  loaderOptions: {
    packages: [{name: 'myPackage', location: '.'}]
  },
  suites: ['test/unit/**/*.js'],
  functionalSuites: [],
  excludeInstrumentation: /^(?:tests|node_modules)\//
};
