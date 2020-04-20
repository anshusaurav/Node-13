1. console 'hello world' in REPL.
```js
    console.log('hello world')
```
2. Write a function to multiply two numbers and execute it in REPL.
```js
    function multiply(a,b) {
        return a*b;    
    }
```
3. Explain v8 in your own words ?


V8 is a processor which is used to process javascript code. Its present in browser and well as node evironment. It is different from other engines such as spidermonkey and chakra


4. console 'hello World' in a script file and run it using script writer.
```js
    console.log('hello World');
```
5. create a new Buffer and write 'welcome to nodejs' in REPL. Calculate length of buffer.

```js
    const buf = Buffer.from('welcome to nodejs');
    console.log(buf.length); //17
```
6. create a fixed size buffer of length 5 and write 'hello nodejs' in REPL. Print the output and convert it to string.
```js
    const buf3 = Buffer.alloc(5);
    buf3.write('hello nodejs');
    console.log(buf3.toString())
```    
7. write a script where you read a file.
    Folder
        Entry file - index.js
        File to be read - hello.txt
        
```js
    Please check Folder-named 7 
```   
8. write a script where you write to a file.
    Folder
        Entry file - index.js
        File to write to - hello.txt
        Content to be written - "Hey, I am being written to the file".

```js
    Please check Folder-named 8 
``` 
9. parse the url and get the following properties:
    URL: "https://localhost:4000/editors/dashboard?uname=asdf&key=ah463hg"
    1. protocol
    2. host
    3. pathname
    4. query
```js
    const url = require('url'); 
    let str = 'https://localhost:4000/editors/dashboard?uname=asdf&key=ah463hg';
    console.log(url.parse(str, true)); 

// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:4000',
//     port: '4000',
//     hostname: 'localhost',
//     hash: null,
//     search: '?uname=asdf&key=ah463hg',
//     query: [Object: null prototype] { uname: 'asdf', key: 'ah463hg' },
//     pathname: '/editors/dashboard',
//     path: '/editors/dashboard?uname=asdf&key=ah463hg',
//     href: 'https://localhost:4000/editors/dashboard?uname=asdf&key=ah463hg'
//   } 

```
11. Differentiate between path and pathname. 
Path is complete path whether pathname is path without query string. 
10. Differentiate between host and hostname.
Host is complete host with port whether hostname is without port number. 