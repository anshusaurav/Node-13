const http = require("http");

const PORT = process.env.PORT|3000;
var server = http.createServer(requestHandler);

function requestHandler(req, res) {

    
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'}) 
        res.end("Some PlainText");
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'}) 
        res.end("<h3>Some HTML</h3>");
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'}) 
        res.end("<h3>Content Not Found</h3>");
    }
}
server.listen(PORT, ()=>console.log('Server running'));
