var connect = require('connect');
var serveStatic = require('serve-static');
var makeJade = require('./lib/processor/jade');
var makeLess = require('./lib/processor/less');
function miniHarp(root){
	var app = connect();
	app
		.use(serveStatic(root))
		.use(makeJade(root))
		.use(makeLess(root));
		
	return app;
};
module.exports = miniHarp;
