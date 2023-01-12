/*
Write a function groupObjectsBy which takes as an input an array of JSON objects and returns a grouped object by a key. Eg
groupObjectsBy([ 
  {
    "channel": "A",
    "name": "shoe"
  },
  {
    "channel": "A",
    "name": "electronics"
  },
  {
    "channel": "B",
    "name": "apparel"
  },
  {
    "channel": "C",
    "name": "electronics"
  }
], ‘channel’)
Will return
{
  "A":[{"channel":"A","name":"shoe"},{"channel":"A","name":"electronics"}],
  "B":[{"channel":"B","name":"apparel"}],
  "C":[{"channel":"C","name":"electronics"}]
}
*/

const arr = [ 
  {
    "channel": "A",
    "name": "shoe"
  },
  {
    "channel": "A",
    "name": "electronics"
  },
  {
    "channel": "B",
    "name": "apparel"
  },
  {
    "channel": "C",
    "name": "electronics"
  }
]

const groupObjectsBy = (arr , key) =>{
    return arr.reduce((result , curr)=>{
       (result[curr[key]] = result[curr[key]] || []).push(curr);
       return result;
    },{})
}

const ans = groupObjectsBy(arr,"channel");

console.log(ans);

// why map can't be used to do this 