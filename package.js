/* global Npm, Package */

Package.describe({
  name: 'jaireddjawed:flow-router-react-helpers',
  version: '1.0.2',
  // Brief, one-line summary of the package.
  summary: 'Makes Flow Router function like react router.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jaireddjawed/Flow-Router-React-Helpers',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.7.0.5');
  api.use('ecmascript');
  api.mainModule('flow-router-react-helpers.js');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kadira:flow-router@2.12.1');
  api.use('jaireddjawed:flow-router-react-helpers');
  api.mainModule('flow-router-react-helpers-tests.js');
});

Npm.depends({
  react: '16.4.1',
  'react-dom': '16.4.1',
  'prop-types': '15.6.2',
  'react-mounter': '1.2.0',
});
