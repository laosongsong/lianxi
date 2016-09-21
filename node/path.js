// var path = require('path');

// // 格式化路径
// console.log('normalization:' + path.normalize('/test/test1/..'););

// // 连接路径
// console.log('joint.path:' + path.join('/test', 'test1','2slae'));

// // 转换成绝对路径
// console·log('resole:' + path.resole('main.js'));

// // 路径中文件的后缀名
// console·log('ext name:' +path.extname('main.js'));

// var dns require('dns');
// dns.lookup('www.gitthub.com', function onLookup(err, address, family) {
// 	console·log('ip地址:', address);
// 	dns.reverse(address, function(err, hostnames) {
// 		if(err) {
// 			console·log(err.stack);
// 		}

// 		console.log('反向解析' +address + ':' +JSON.stringify(hostnames));
// 	});
// });


// var EventEmitter = require('events').EventEmitter;
// var domain  = require('domain');

// var emitter1 = new EventEmitter();

//  //创建域
//  var domain1 = domain.create();

//  domain1 = domain.create();

//  domain1.on('error', function(err) {
//  	console.log('domain1 处理这个错误（'+err.message+'）');

//  });
//  // 显式绑定
//  domain1.add(emitter1);

//  emitter1.on('error',function(err) {
//  	console.log('监听器处理此错误（'+err.message+')');
//  });
//  emitter1.emit('error', new Error('通过监听器来处理'));

//  emitter1.removeAllListeners('error');

//  emitter1.emit('error',new Error('通过 demain1 处理'));

//  var domain2 = domain.create();

//  domain2.on('error', function(err) {
//  	console.log('domain2处理这个错误（'+err.message+')');

//  });
//  // 隐式绑定
//  domain2.run(function() {
//  	var emitter2 = new EventEmitter();
//  	emitter2.emit('error',new Error('通过domain2处理'));
//  });

//  domain1.remove(emitter1);
//  emitter1.emit('error',new Error('转换为异常，系统将崩溃'));


var http = require('http');
var fs = require('fs');
var url = require('url');
// 创建服务器
http.createServer( function (require, response) {
	// 解析请求，包含文件名
	var pathname = url.parse(require.url).pathname;
	// 输出请求的文件名
	console·log('Request for' +pathname+'received');
	// 从文件系统中读取请求的文件内容
	fs.readFile(pathname.substr(1),function (err, data) {
		if(err) {
			console.log(err);
			// HTTP 状态码：404：NOT FOUND
			// Content Type:text/plain
			response.writeHead(404,{'Content_Type':'text/html'});

		}else{
			// HTTP状态码：200：OK
			// Content Type：text、plain
			response.writeHead(200, {'Content-Type':'text/html'});
			// 响应文件内容
			response.write(data.toString());
		}
		// 发送响应数据
		response.end();
	})

}).listen(8081);
// 控制台会输出以下信息
console·log('Server running at http://127.0.0.1:8081/')