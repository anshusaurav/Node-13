const http = require("http");

const PORT = process.env.PORT||5000;
var server = http.createServer();
server.on('request', (req, res) =>{
    res.end('My first server in NodeJS');
});
server.listen(PORT, ()=>console.log('Server running'));
