//Implement a method which takes in options file path and reads an XML file from filesystem and returns it’s JSON. The method should have error handling for non-existent file paths.


const fs = require('fs');
const xmlParser = require('xml2json');
fs.readFile('q1binput.xml',(err,data)=>
{
    if(err) {
        if(err.code === 'ENOENT') console.log('file path invalid');
        else console.log('some other error')
    }
    let xmlData = xmlParser.toJson(data);
    fs.writeFile('xml2json.json',xmlData,(err)=>{
        if(err) console.log(err);
        console.log('xml to json converted')
        
        console.log(cnt)
    });

})
