
const http = require("http");
const qs = require("querystring");
const PORT = process.env.PORT|3000;
var server = http.createServer();
// Q3. create server, send json data in request from postman, parse in on the server and send html response with entire parsed data information.
//     - format of json data is {name: your name, email: "", }
//     - Html response format is <h1>Name</h1><h2>email</h2>

// Q4. Follow Q3 with form data containing fields i.e name and email. Parse form-data using querystring module.
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
