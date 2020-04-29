
const http = require("http");

const PORT = process.env.PORT|3000;
var server = http.createServer();
// 1. handle post method on '/' route
//     2. send json data on it from postman
//     3. capture data from request using data and end event on request object
//     4. when end event fires, send captured data in response with status code 201.


server.on('request', (req, res) =>{
    // console.log(req.headers);
    let store = '';
    req.on('data', (chunks) => store += chunks);
    req.on('end', ()=> {
        if(req.url === '/' && req.method === "POST"){
            let jsonObj = JSON.parse(store);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(jsonObj, undefined, 4));
        }
    });
});

server.listen(PORT, ()=>console.log('Server running'));
