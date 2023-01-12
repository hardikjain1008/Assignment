const fs = require('fs')
fs.readdir('.',(err,content)=>{
    if(err) return err;
    console.log(content);
})

