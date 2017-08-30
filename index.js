var server = require("./server");
var router = require("./route.js");
var requestHandler = require("./RequestHandler")

var handle = {};
handle['/'] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;

server.start(router,handle);