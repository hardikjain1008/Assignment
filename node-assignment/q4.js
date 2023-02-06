const http = require('http');
const fs = require('fs');

var arr = ["https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg"]
/*
var arr = ["http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg",
"https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
"https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
"https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
"https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"
]
*/
let imgIdx = 0 , folderCount = 1;

arr.forEach((URI) => {
   let folderName = `${__dirname}/images${folderCount}`;

   if(imgIdx <= 4){
      //folderName = `${__dirname}/images/${++folderCount}`;
      try {
         if (!fs.existsSync(folderName)) {
           fs.mkdirSync(folderName);
         }
       } catch (err) {
         console.error(err);
       }
       
      //fs.mkdirSync(folderName);
      const response =  fetch(URI);
      const blob =  response.blob();
      const arrayBuffer = blob.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      //let imagePath = `${folderName}/${idx}`;
      fs.writeFile(folderName,buffer)
      console.log(`folder no ${folderCount} with index ${imgIdx}`)
   }
})