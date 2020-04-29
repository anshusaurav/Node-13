const http = require("http");

const PORT = process.env.PORT|3000;
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}) 
    res.end("<h3>Welcome to altcampus</h3>");
}
server.listen(PORT, ()=>console.log('Server running'));
