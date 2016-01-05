#!/usr/bin/env node
var parseArgs = require('minimist');
var miniHarp = require('../');

var args = parseArgs(process.argv.slice(2));
var port = args['port']?args['port']:4000;
var root = args['_'][0]?args['_'][0]:process.cwd();
var app = miniHarp(root);
console.log('Starting mini-harp on http://localhost:' + port);
app.listen(port);
