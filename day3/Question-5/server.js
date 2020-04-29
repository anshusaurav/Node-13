
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT|3000;
var server = http.createServer();
// Q5. Follow Q1 and save the json data in project folder using fs.writeFile into a file locally.
//     Folder structure
//         - server.js
//         - data(folder)
//             - create filename using username and append `.json` in last.
let usersPath = path.join(__dirname , "data/");
server.on('request', (req, res) =>{
    // console.log(req.headers);
    let store = '';
    req.on('data', (chunks) => store += chunks);
    req.on('end', ()=> {
        if(req.url === '/' && req.method === "POST"){
            let jsonObj = JSON.parse(store);
            let username = jsonObj.username;
            console.log(username);
            console.log(usersPath + username + '.json');
            fs.open(usersPath + username + '.json', 'wx', (err,fd) =>{   

                if(err) {console.log(err.code); return;}
                fs.writeFile(fd, store, (err) =>{
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
