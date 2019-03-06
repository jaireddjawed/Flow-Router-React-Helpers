/* global Npm, Package */

Package.describe({
  name: 'jaireddjawed:flow-router-react-helpers',
  version: '1.1.0',
  // Brief, one-line summary of the package.
  summary: 'Helpers for Flow Router and React.js.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jaireddjawed/Flow-Router-React-Helpers',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse((api) => {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.mainModule('flow-router-react-helpers.js');
});

Package.onTest((api) => {
  api.use([
    'ecmascript',
    'tinytest',
    'kadira:flow-router@2.12.1',
    'alanning:roles@1.2.15',
    'jaireddjawed:flow-router-react-helpers',
  ]);
  api.mainModule('flow-router-react-helpers-tests.js');
});

Npm.depends({
  react: '16.4.1',
  'react-dom': '16.4.1',
  'prop-types': '15.6.2',
  'react-mounter': '1.2.0',
});
