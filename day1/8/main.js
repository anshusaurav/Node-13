var { writeFile } = require('fs');//desctructured                                 


writeFile('hello.txt','Hey, I am being written to the file','UTF-8', (err, res)=>{   //UTF for character encoding
    if(err)
        console.log(err);
    else
        console.log('Write Successful');    
});