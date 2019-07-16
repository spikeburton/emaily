/**
 * @name keys.js
 * @description Depending upon if in dev or prod return correct set of keys
 */

if (process.env.NODE_ENV === 'production') {
  // in prod
  module.exports = require('./prod');
} else {
  // return dev keys
  module.exports = require('./dev');
}
