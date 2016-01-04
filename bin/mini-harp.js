#!/usr/bin/env node
var connect = require('connect');
var parseArgs = require('minimist');
var url = require('url');
var serveStatic = require('serve-static');

var args = parseArgs(process.argv.slice(2));
var app = connect();
var port = args['port']?args['port']:4000;
var root = args['_'][0]?args['_'][0]:process.cwd();
console.log('Starting mini-harp on http://localhost:' + port);
app
	.use(serveStatic(root)).listen(port);
