'use strict';

/*
Startup Parameters
-h:help        - Displays help
-s:standalone  - Starts the server right away
-p:port NUMBER - Port number to start on
*/

var _ = require('lodash');
var dyson = require('dyson');
var parseArgs = require('minimist');

var rootDir = __dirname;

var start = function(port) {
  dyson.bootstrap({
    configDir: rootDir + '/services',
    port: port
  });
};

var argv = parseArgs(process.argv);

// Displays help information
if (argv.h || argv.help) {
  console.log('Usage: node core-mock-services.js [-s:standalone] [-p:port NUMBER]');
  process.exit();
}

// Use -s or -standalone to execute the server on startup
var standaloneMode = argv.s || argv.standalone;

if (standaloneMode) {
  var port = argv.p || argv.port || 3000;
  start(port);
}

module.exports = {
  start: start
};
// Provided dyson is installed globally,
// the equivalent for this script from the CLI would be: `dyson services`
