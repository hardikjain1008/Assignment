const fs = require('fs');
const saveURL = require('node-url-shortener');
const csv = require('csv-writer').createObjectCsvWriter;



let arr = ["http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg",
"https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
"https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
"https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
"https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"
];

function main(array){
    array.forEach((data) => {
        saveURL.short(data,(err,url)=>{
        if(err) console.log(err);
        let ans = `old url : ${data} - new url : ${url}\n`
        fs.appendFileSync('q5output.csv',ans,(err)=>
        {
            if(err) throw err;
        })
        })
    })
    
}
main(arr);




