var fs = require('fs');

var linesInFiles = function(folderName) {
	
	var week1 = fs.readdirSync(folderName);
    
    var linesInFiles = [];

    week1.forEach(function(menu){
       	var content = fs.readFileSync("./files/week1/" + menu,"utf8")
        //console.log("==> " + content.split('\n').;length);
        var lines = content.split('\n');
        for(var i=0; i< lines.length; i++){
            //console.log(lines[i]);
        	linesInFiles.push(lines[i]);
        }
        //return content.split('\n').length;
   	});
    console.log(linesInFiles);
    return linesInFiles;
  }


exports.linesInFiles = function(folderName) {
    return linesInFiles(folderName);
  }

exports.linesInFilesAsync = function(folderName, callback) {
      //var week1 = fs.readdirSync(folderName, callback);
      var lines = linesInFiles(folderName);
      callback(null, lines);

}
