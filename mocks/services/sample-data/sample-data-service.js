'use strict';

let constants = require('../../constants/index.js');
/**
 * /sample-data/ will return this example data
 */
module.exports = [
  {
    path: `${constants.sampleDataUri}`,
    method: 'GET',        // Type
    cache: false,         // Disable Caching
    delay: [100, 150],  // Mock a "delay" from the service
    template: function (params, query, body) {
      return require("./mock-data/sample-data.json");
    }
  }
];
