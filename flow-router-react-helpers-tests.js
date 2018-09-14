// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by flow-router-react-helpers.js.
import { name as packageName } from "meteor/jaireddjawed:flow-router-react-helpers";

// Write your tests here!
// Here is an example.
Tinytest.add('flow-router-react-helpers - example', function (test) {
  test.equal(packageName, "flow-router-react-helpers");
});
