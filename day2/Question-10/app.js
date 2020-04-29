
const http = require("http");
const url = require("url");

const PORT = process.env.PORT|3000;
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    let parsedUrl = url.parse(req.url, true);
    res.writeHead(200, {'Content-Type': 'application/json'}) 
    res.end(JSON.stringify(parsedUrl, undefined, 4));
}
server.listen(PORT, ()=>console.log('Server running'));
