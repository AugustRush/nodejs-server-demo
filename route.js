//
function route(handler,pathname, response,postData) {
	console.log("this request pathname is " + pathname);
	if (typeof handler[pathname] == 'function') {
		handler[pathname](response,postData);
	} else {
		console.log("can't handle request, pathname is " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
    	response.write("404 Not found");
    	response.end();
	}
}

exports.route = route;