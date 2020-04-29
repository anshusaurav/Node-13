
const http = require("http");
const qs = require("querystring");
const PORT = process.env.PORT|3000;
var server = http.createServer();
// Q5. Follow Q1 and save the json data in project folder using fs.writeFile into a file locally.
//     Folder structure
//         - server.js
//         - data(folder)
//             - create filename using username and append `.json` in last.
server.on('request', (req, res) =>{

    let store = '';
    req.on('data', (chunks) => store += chunks);
    req.on('end', ()=> {
        if(req.url === '/' && req.method === "POST"){
            console.log(store);
            let obj = qs.parse(store);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h1>${obj.name}</h1><h2>${obj.email}</h2>`);
        }
    });
});

server.listen(PORT, ()=>console.log('Server running'));
