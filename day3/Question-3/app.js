
const http = require("http");

const PORT = process.env.PORT|3000;
var server = http.createServer();
// create server, send json data in request from postman, parse in on the server and send html response with entire parsed data information.
// - format of json data is {name: your name, email: "", }
// - Html response format is <h1>Name</h1><h2>email</h2>

server.on('request', (req, res) =>{
    // console.log(req.headers);
    let store = '';
    req.on('data', (chunks) => store += chunks);
    req.on('end', ()=> {
        if(req.url === '/' && req.method === "POST"){
            let jsonObj = JSON.parse(store);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h1>${jsonObj.name}</h1><h2>${jsonObj.email}</h2>`);
        }
    });
});

server.listen(PORT, ()=>console.log('Server running'));
