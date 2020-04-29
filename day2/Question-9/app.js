
const http = require("http");

const PORT = process.env.PORT|3000;
var server = http.createServer(requestHandler);

function requestHandler(req, res) {

    
    if(req.url === '/users' && req.method === "GET"){
        res.writeHead(200, {'Content-Type': 'text/html'}) 
        res.end(`<form>
                <label>Name</label>
                <input type="text" name="username">
                <label>Email</label>
                <input type="text" name="email"> 
                </form>`);
    }
    else if(req.url === '/users' && req.method === "POST"){
        res.writeHead(200, {'Content-Type': 'text/html'}) 
        res.end("<p>Posted for the first time</p>");
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'}) 
        res.end("<h3>Content Not Found</h3>");
    }
}
server.listen(PORT, ()=>console.log('Server running'));
const http = require("http");

const PORT = process.env.PORT|3000;
var server = http.createServer(requestHandler);

function requestHandler(req, res) {

    
    if(req.url === '/users' && req.method === "GET"){
        res.writeHead(200, {'Content-Type': 'text/html'}) 
        res.end(`<form>
                <label>Name</label>
                <input type="text" name="name">
                <label>Email</label>
                <input type="text" name="email">
            </form>`);
    }
    else if(req.url === '/users' && req.method === "PUT"){
        res.writeHead(200, {'Content-Type': 'text/html'}) 
        res.end("<p>Posted for the first time</p>");
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'}) 
        res.end("<h3>Content Not Found</h3>");
    }
}
server.listen(PORT, ()=>console.log('Server running'));
