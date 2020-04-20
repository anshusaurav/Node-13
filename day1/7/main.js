
//const fs = require('fs');       //Get core modules
var { readFile } = require('fs');//desctructured                                 
const url = require('url');
const mp = require('./map');
const math = require('./math');                       
//get global packages
console.log('Me first');
setTimeout(()=> {
    console.log('second')
}, 1000);


readFile('abc.txt','UTF-8', (err, res)=>{   //UTF for character encoding
    console.log(res);
});

readFile('xyz.txt','UTF-8', (err, res)=>{   //UTF for character encoding
    console.log(res);
});
console.log(mp.arr);

let str = 'http://google.com:80/register?name=xyz&name=abc';
console.log(url.parse(str, true));          //true so query is also parsed default false

console.log(math.sum(5,6));
console.log(math.sum(5,math.PI));
// console.log(math.product(5,6));