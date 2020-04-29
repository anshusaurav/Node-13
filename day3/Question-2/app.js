
const http = require("http");
const qs = require("querystring");
const PORT = process.env.PORT|3000;
var server = http.createServer();
// Follow above steps with form data from postman instead of json data.
server.on('request', (req, res) =>{
    // console.log(req.headers);
    let store = '';
    req.on('data', (chunks) => store += chunks);
    req.on('end', ()=> {
        if(req.url === '/' && req.method === "POST"){
            console.log(store);
            let obj = qs.parse(store);
            
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(obj, undefined, 4));
        }
    });
});

server.listen(PORT, ()=>console.log('Server running'));
