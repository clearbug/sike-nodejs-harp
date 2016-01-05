var connect = require('connect');
var serveStatic = require('serve-static');
var url = require('url');
var path = require('path');
var makeJade = require('./lib/processor/jade');
var makeLess = require('./lib/processor/less');
function miniHarp(root){
	var app = connect();
	app
		.use(function(req, res, next){
			if(url.parse(req.url).path === '/'){
				req.url += 'index.html';
			}
			next();
		})
		.use(makeJade(root))
		.use(makeLess(root));
		
	/*
	app
		.use(function(req, res, next){
			if(url.parse(req.url).path === '/'){
				req.url += 'index.html';
			}
			next();
		})
		.use(function(req, res, next){
			var extname = path.extname(req.url);
			if(extname === '.jade' || extname === '.less'){
				res.statusCode = 404;
				res.end('Not Found: ' + req.url);	
			}else{
				next();
			}
		})
		.use(serveStatic(root))
		.use(makeJade(root))
		.use(makeLess(root));
	*/
		
	return app;
};
module.exports = miniHarp;
