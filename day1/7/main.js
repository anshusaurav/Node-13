
var { readFile } = require('fs');//desctructured                                 


readFile('hello.txt','UTF-8', (err, res)=>{   //UTF for character encoding
    console.log(res);
});
