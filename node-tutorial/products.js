var fs = require('fs');

module.exports = function(filePath){

  this.productNames = function(callback) {
    var filesInFolder = fs.readFileSync(filePath, "utf8");
      var rows = filesInFolder.split('\n');
       console.log("===>" + rows.length);

      var listOfProducts = [];
      var productMap = {};

    rows.forEach(function(row) {
     var productName = row.split(',')[1];

      if(productMap[productName]=== undefined){
        listOfProducts.push(productName);
        productMap[productName]=0;
      } 
    });
      callback(null, listOfProducts);
  }

  this.productsSold = function(callback){
    var filesInFolder = fs.readFileSync(filePath, "utf8");
      var rowsInFile = filesInFolder.split('\n');
         console.log(rowsInFile.length);

      /*var products = require("../products");
        var products = new Products("./files/products.csv");
         products.productsSold(function(err, products)
*/       
         var productSold = [];
         var productMap = {};

    rowsInFile.forEach(function(row){
     var fields = row.split(',');

      //for(var i = 0; i < products.length; i++){
           var currentProduct = fields[1];
           var productSld = fields[2];

           console.log("fields :" + JSON.stringify(fields));

        if(productMap[currentProduct] === undefined){
          productMap[currentProduct]=0;
        }
         productMap[currentProduct]= productMap[currentProduct] + Number(productSld);
        
    });

            console.log("--->" + JSON.stringify(productMap));
            callback(null, productMap);
  }
}

  /*

    if(productMap[productsSold]=== undefined){
      productQuantity.push(productMap);
      productMap[productsSold]=0;
    }
  });
      callback(null, productQuantity);
  };*/

/*
exports.productNames = function(fileName){
  var stream = fs.readFileSync(fileName);
  var list = stream.toString();
  var rows = list.split('\n');

var productNames = rows.map (function(row) {
  var Products = require("../products");
        var products = new Products('./files/products.csv');
        products.productNames(function(err, products){

  var fields = rows.split(';');
     return {
       productNames : fields[0];
     }
  });
     return list of productNames;
}

exports.productsSold = function(fileName, callback) {
  var quantityMap = productsSold(fileName);
    callback(null, quantityMap);
}
  */  