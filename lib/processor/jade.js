module.exports = makeJade;
var jade = require('jade');
var path = require('path');
var fs = require('fs');
function makeJade(root){
	return function(req, res, next){
		if(path.extname(req.url) === '.html'){
			var pt = root + req.url;
			if(fs.existsSync(pt)){
				var data = fs.readFileSync(pt, {encoding: 'utf-8'});
				res.end(data);
			}else{
				pt = pt.replace('html', 'jade');
				if(fs.existsSync(pt)){
					res.end(jade.renderFile(pt));
				}
			}
		}
		next();
	};
};
