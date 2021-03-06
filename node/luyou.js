// var http = require('http');

// var url = require('url');

// var util = require('util');

// http.createServer(function(req, res) {
// 	res.writeHead(200, {'Content-Type':'text/plain'});
// 	res.end(util.inspect(url.parse(res.url, true)))
// }).listen(3000)


var http = require('http');

var querystring = require('querystring');

var util = require('util');

http.createServer(function(reg, res){
	var post = '';//定义了一个post变量， 用于暂存请求体的信息
	reg.on('data',function(chunk){
			// 通过reg的data事件监听函数，每当接受到的请求体的数据，就累加到post变量中
			post +=chunk;
		})
	reg.on('end',function(){
		//在end事件触发后，通过querystring。parse将post解析为真正的POST请求格式，然后向客户端返回。
		post = querystring.parse(post);
		res.end(util.inspect(post));
	})
}).listen(3000);