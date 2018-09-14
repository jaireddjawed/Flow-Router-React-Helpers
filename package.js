/* global Npm, Package */

Package.describe({
  name: 'jaireddjawed:flow-router-react-helpers',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jaireddjawed/Flow-Router-React-Helpers',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.7.0.5');
  api.use('ecmascript');
  api.mainModule('flow-router-react-helpers.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kadira:flow-router');
  api.use('jaireddjawed:flow-router-react-helpers');
  api.mainModule('flow-router-react-helpers-tests.js');
});

Npm.depends({
  react: '',
  'react-dom': '',
  'react-mounter': '',
});
