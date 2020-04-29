const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const path = require("path");
let server = http.createServer(requestHandler);

// Convert a 4-5 page layouts website into node application.
// Steps are:
// 1. Create seperate route for all html pages.
// 2. handle css and images linked to html pages.
// 3. Add a contact us page on route */contact* and method *GET* and send html file with a contact form containing name, email, phone.
// 4. Submit the form and handle a *POST* request on */contact* and save form data in local project directory.
let usersPath = path.join(__dirname , "data/");
function requestHandler(req, res){
    let str = req.url;
    console.log(str);
    if(str == '/' || str == '/index.html'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('index.html').pipe(res);
    }
    else if(str.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream(str.slice(1)).pipe(res);
    }
    else if(str.endsWith('.png')) {
        res.setHeader('Content-Type', 'image/png');
        fs.createReadStream(str.slice(1)).pipe(res);
    }
    else if(str.endsWith('.jpg')) {
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream(str.slice(1)).pipe(res);
    }
    else if(str == '/schedule'|| str == '/schedule.html'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('schedule.html').pipe(res);
    }
    else if(str == '/speakers' || str == '/speakers.html'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('speakers.html').pipe(res);
    }
    else if(str == '/venue' || str == '/venue.html'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('venue.html').pipe(res);
    }
    else if(str == '/register' || str == '/register.html'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('register.html').pipe(res);
    }
    else if((str == '/contact' || str == '/contact.html') && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`<form  method='POST' action='/contact'> 
                <label for="name">Name</label>        
                <input type="text" name="name">
                <label for="email">Email</label>        
                <input type="text" name="email">
                <label for="phone">Phone</label>        
                <input type="text" name="phone">
                <input type="submit">
        </form>`)
    }
    else if((str == '/contact' || str == '/contact.html') && req.method === 'POST'){
        var store = '';
        req.on('data', (chunk) => store+= chunk);
        req.on('end', ()=>{
            console.log(store);
            let obj = qs.parse(store);
            let username = obj.name;
            let str = JSON.stringify(obj, undefined,4 );
            console.log(username);
            console.log(usersPath + username + '.json');
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
            res.end('Message Sent');
        });
        // res.setHeader('Content-Type', 'text/html');
        // fs.createReadStream('register.html').pipe(res);
    }
    else
        res.end('404 Page not Found');
}

server.listen(3000, ()=>console.log('Server has started'));