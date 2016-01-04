var connect = require('connect');
var serveStatic = require('serve-static');
var makeJade = require('./lib/processor/jade');
function miniHarp(root){
	var app = connect();
	app
		.use(serveStatic(root))
		.use(makeJade(root));
		
	return app;
};
module.exports = miniHarp;
