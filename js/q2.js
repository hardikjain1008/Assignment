/*
Create an Object MetadataParser using constructor functions
The Object should have private properties _version, _channel, _keyField 
Object should have get and set function for each property
Add a method in the class getKeyFields, which takes an array of JSON objects (eg [{channel: ‘A’}, {channel: ‘B’}, {channel ‘C’}]) as input and returns an array of values of _keyField, input array.
*/

const MetadataParser = function(a,b,c)
{
   this._version=a;
   this._channel=b;
   this._keyField=c;
};

MetadataParser.prototype.getVersion = function(){
    return this._version;
}
MetadataParser.prototype.getChannel = function(){
    return this._channel;
}
MetadataParser.prototype.getkeyField = function(){
    return this._keyField;
}
MetadataParser.prototype.setVersion = function(a){
    this._version = a;
}
MetadataParser.prototype.setChannel = function(b){
    this._channel =b;
}
MetadataParser.prototype.setkeyField = function(c){
    this._keyField =c;
}



const obj = new MetadataParser(1,2,3);
obj.setVersion(1);
obj.setChannel(1);
obj.setkeyField(1);

console.dir(obj);