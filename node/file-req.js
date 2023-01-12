const https = require('https')
const fs = require('fs')

const url = "https://jsonplaceholder.typicode.com/posts";

https.get(url, res => {
    //res.setEncoding('utf8');
    let body = '';
    // res is readstream , .on() is how we register for event
    res.on('data',(val) =>{
        body += val;
        // console.log('success')
        // console.log(body)
    });
    // end event tells that we recieved the data
    res.on('end',()=>{
        fs.writeFile('data.json',body,(err)=>{
           if(err) return err
           console.log('Pulled all the posts')
        })
    })
});