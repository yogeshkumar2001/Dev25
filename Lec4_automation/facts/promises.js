let fs= require("fs");

let  f1promise= fs.promises.readFile("./f1.txt");
console.log(f1promise);

f1promise.then(function(data){
    console.log("Inside scb");
    console.log(data+"");
});

f1promise.catch(function(error){
    console.log("Inside rcb");
    console.log(error);
});