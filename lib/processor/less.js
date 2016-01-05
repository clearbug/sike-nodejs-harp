module.exports = makeLess;
var less = require('less');
var path = require('path');
var fs = require('fs');
function makeLess(root){
	return function(req, res, next){
		if(path.extname(req.url) === '.css'){
			var pt = root + req.url;
			if(fs.existsSync(pt)){
				var data = fs.readFileSync(pt, {encoding: 'utf-8'});
				res.setHeader('Content-Type', 'text/css; charset=UTF-8');
				res.end(data);
			}else{
				pt = pt.replace('css', 'less');
				if(fs.existsSync(pt)){
					var data = fs.readFileSync(pt, {encoding: 'utf-8'});
					res.setHeader('Content-Type', 'text/css; charset=UTF-8');
					less.render(data, function(err, output){
						if(err){
							throw err;
						}
						res.end(output);
					});
				}
			}
		}
		next();
	};
};
