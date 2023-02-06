// q3 (a) Use request package to download google.com homepage and save it into a file using fs package.

const eventEmiiter = require('events');
const request = require('request');
const fs = require('fs');

request('http://google.com',(err , res , data)=>{
    if(err) console.log(err);
    console.log(res.statusCode)
    // if want to save as txt add extension text
    fs.writeFile('search.html',res.body,(err)=>{
        if(err) console.log(err);
        console.log('file saved')
    })
})


// q3 (b) Use request package and event it emits to stream a file from web as a file in filesystem.
function stream(){
console.log('hello')
request('http://github.com').pipe(fs.createWriteStream('Stream.txt'))
}
stream();