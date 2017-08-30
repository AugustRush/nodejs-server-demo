var http = require("http");
var url = require("url");

function start(router,handler) {
	var onRequest = function(request,response) {
		//
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log('request for ' + pathname + 'recieved');
		// recieve data
		request.setEncoding('utf8');
		request.addListener("data", function(postChunk){
			postData += postChunk;
			console.log("Recieve post data chunk " + postChunk + ".");
		});
		// end
		request.addListener("end",function(){
			router.route(handler,pathname,response,postData);
		});
	}
	//
	http.createServer(onRequest).listen(8888);
	//
	console.log('server start...');
}

exports.start = start;