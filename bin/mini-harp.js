#!/usr/bin/env node
var connect = require('connect');
var parseArgs = require('minimist');
var args = parseArgs(process.argv.slice(2));
var app = connect();
var port = args['port']?args['port']:4000;
console.log('Starting mini-harp on http://localhost:' + port);
app.listen(port);
