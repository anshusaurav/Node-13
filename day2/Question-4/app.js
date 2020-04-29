const http = require("http");

const PORT = process.env.PORT|3000;
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'}) 
    res.end(JSON.stringify(req.headers, undefined, 4));
}
server.listen(PORT, ()=>console.log('Server running'));
