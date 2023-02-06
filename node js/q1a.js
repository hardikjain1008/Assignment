const fs = require('fs');
const xml = require('xml-js');
var data = fs.readFileSync('./q1ainput.xml','utf-8')

const xmlParser = async (options) =>{
    try{
    const val = await xml.xml2json(options,{compact : true , spaces :4})
    console.log(val);
    }
    catch(err){
    if(err.code === 'ENOENT') console.log('file path invalid');
    else console.log('some other error')
    }
}

console.log(xmlParser(data));

module.exports = xmlParser;