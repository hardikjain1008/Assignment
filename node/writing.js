const fs = require('fs');

// writeFile('file address','data to be returned','type','call back function')

fs.writeFile('data.txt','hello this file has been created\n','utf8',
(err)=>{
    if(err) return err;
    console.log('file has been saved')
})

fs.appendFile('data.txt','data appended','utf8',
(err)=>{
    if(err) return err;
    console.log('file has been saved')
})