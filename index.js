var connect = require('connect');
var serveStatic = require('serve-static');
function miniHarp(root){
	var app = connect();
	app.use(serveStatic(root));
	return app;
};
module.exports = miniHarp;
