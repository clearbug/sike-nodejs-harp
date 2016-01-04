#!/usr/bin/env node
var connect = require('connect');
var parseArgs = require('minimist');
var url = require('url');
var args = parseArgs(process.argv.slice(2));
var app = connect();
var port = args['port']?args['port']:4000;
console.log('Starting mini-harp on http://localhost:' + port);
app
	.use(function(request, response){
		var path = url.parse(request.url).path;
		if(path === '/current-time'){ 
			var date = (new Date()).toISOString();
			response.end(date + '\n');
		}else{
			response.end('Cannot Get ' + path + '\n');
		}
	}).listen(port);
