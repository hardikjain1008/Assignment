const http = require('http');
const fs = require('fs');
const request = require('request')

var arr = ["https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
"https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
"https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
"https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
"https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
"https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
"https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"]
let folderCount = 0 , imgCnt = 0;
let path
let download = (uri ,filename , callback) =>{
  request.head(uri , (err , res , body) => {
  if(err) console.log(err);
  console.log(imgCnt);
  if(imgCnt%5 === 0)
  {
    folderCount++;
    fs.mkdir(`images${folderCount}`,(err)=> console.log(err));
  }
  imgCnt++;
  path=`images${folderCount}/${imgCnt}.jpg`;
  request(uri).pipe(fs.createWriteStream(path));
  })
}

arr.forEach((URL)=>{
  download(URL)
})
