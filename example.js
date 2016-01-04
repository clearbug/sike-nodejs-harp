var connect = require('connect');
connect()
	.use(connect.cookieParser())
	.use(connect.session({secret: 'some secret text', cookie: {maxAge: 30000}}))
	.use(function(req, res){
		var sess = req.session,
			  url = req.url.split('/');
		if(url[1] == 'name' && url[2]){
			sess.name = url[2];
			res.end('name saved: ' + url[2]);
		}else if(sess.name){
			res.write('session-stored name: ' + sess.name);
			res.end('stored for another: ' + (sess.cookie.maxAge / 1000) + ' seconds');
		}else{
			res.end('no stored name; go to /name/{name} to save a name');
		}
}).listen(3000);
