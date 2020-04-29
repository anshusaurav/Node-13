const http = require("http");
//request headers, request url and request method.

const PORT = process.env.PORT||3000;
var server = http.createServer();
server.on('request', (req, res) =>{
    res.statusCode = 202;
    res.end(res.statusCode + " STATUS CODE");
});
server.listen(PORT, ()=>console.log('Server running')); 
