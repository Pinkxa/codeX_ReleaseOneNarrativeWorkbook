var fs = require('fs');
var singers = fs.readdirSync("./gospel")
   console.log(singers);
   singers.forEach(function(songs){
var content = fs.readFileSync("./gospel/" + songs,"utf8")
console.log(content.split("\n"));
   });