const http = require('http');
const fs = require('fs');
let server = http.createServer(requestHandler);


// Convert a 4-5 page layouts website into node application.
// Steps are:
// 1. Create seperate route for all html pages.
// 2. handle css and images linked to html pages.
// 3. Add a contact us page on route */contact* and method *GET* and send html file with a contact form containing name, email, phone.
// 4. Submit the form and handle a *POST* request on */contact* and save form data in local project directory.

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
    else if((str == '/register' || str == '/register.html') && req.method === 'GET'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('register.html').pipe(res);
    }
    else if((str == '/register' || str == '/register.html') && req.method === 'POST'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('register.html').pipe(res);
    }
    else
        res.end('404 Page not Found');
}

server.listen(3000, ()=>console.log('Server has started'));