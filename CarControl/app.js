var http = require('http');
var fs = require('fs');
var url = require('url');

var options = {
  key: fs.readFileSync('my-key.pem'),
  cert: fs.readFileSync('my-cert.pem')
};

function launchWeb(req, res) {
	var parsedUrl = url.parse(req.url);

	var path = parsedUrl.pathname;
	if (path == "/") {
		path = "index.html";
	}

	fs.readFile(__dirname + path,

		// Callback function for reading
		function (err, fileContents) {
			// if there is an error
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + req.url);
			}
			// Otherwise, send the data, the contents of the file
			res.writeHead(200);
			res.end(fileContents);
  		}
  	);

	// Send a log message to the console
	console.log("Got a request " + req.url);
}

var httpServer = http.createServer(launchWeb);
httpServer.listen(9111);

console.log("Listening on Port 9111");

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({server: httpServer});
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {

    console.log('received: %s', message);
    if (message == "on"){
      sendOn();
    }
    if (message == "off"){
      sendOff();
    }
    wss.clients.forEach(function each(client){
      if (client !== ws) client.send(message);
    });
  });

  ws.send('connected');

  function sendOn() {
    ws.send('on', function ack(error){
    });
  }

  function sendOff() {
    ws.send('off', function ack(error){
    });
  }
});
