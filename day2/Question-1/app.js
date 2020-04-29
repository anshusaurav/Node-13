const http = require("http");

const PORT = process.env.PORT||5000;
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    res.end('Hello world');
}
server.listen(PORT, ()=>console.log('Server running'));
