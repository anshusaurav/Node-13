
const http = require("http");
const fs = require("fs");
const path = require("path");
const qs = require('querystring');
const PORT = process.env.PORT|3000;
var server = http.createServer();
// Q5. Follow Q1 and save the json data in project folder using fs.writeFile into a file locally.
//     Folder structure
//         - server.js
//         - data(folder)
//             - create filename using username and append `.json` in last.
// sa
// Q6. Follow Q5 with form data.
let usersPath = path.join(__dirname , "data/");
server.on('request', (req, res) =>{
    // console.log(req.headers);
    let store = '';
    req.on('data', (chunks) => store += chunks);
    req.on('end', ()=> {
        if(req.url === '/' && req.method === "POST"){
            console.log(store);
            let obj = qs.parse(store);
            let username = obj.username;
            let str = JSON.stringify(obj, undefined, 4);
            fs.open(usersPath + username + '.json', 'wx', (err,fd) =>{   

                if(err) {console.log(err.code); return;}
                fs.writeFile(fd, str, (err) =>{
                    fs.close(fd, (err) =>{
                        if(err) {console.log(err);  return;}
                        else
                            res.end(username + ' created successfully');
                    });
                });
                console.log(err, fd);
            });
            res.end('User Posted');
            
        }
    });
});

server.listen(PORT, ()=>console.log('Server running'));
