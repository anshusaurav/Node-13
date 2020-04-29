const http = require("http");
//request headers, request url and request method.

const PORT = process.env.PORT||5000;
var server = http.createServer();
server.on('request', (req, res) =>{
    console.log('Headers: ',req.headers);
    console.log('URL: ',req.url);
    console.log('Method: ',req.method);
    res.end('Check console log for headers, url and method');
});
server.listen(PORT, ()=>console.log('Server running'));
