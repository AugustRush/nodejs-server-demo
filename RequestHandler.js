
var exec = require("child_process").exec;
var querystring = require("querystring");
var print = console.log;

function start(response, postData) {
	print('request handler start called...');
	var content = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
	// exec("ls -lah", function(error,stdout,stderr) {
	// 	response.writeHead(200, {"Content-Type": "text/plain"});
 //    	response.write(stdout);
 //    	response.end();
	// });
	response.writeHead(200, {"Content-Type": "text/html"});
    response.write(content);
    response.end();
}

function upload(response,postData) {
	print('request handler upload called...');
	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello upload \n" + querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;