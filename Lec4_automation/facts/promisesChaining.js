let fs=  require("fs");


let f1Promise = fs.promises.readFile("./f1.txt");
f1Promise.then(function(data){
    console.log(data+"");
    let f2promise= fs.promises.readFile("./f2.txt");
    return f2promise;
})
.then(function(data){
    console.log(data+"");
    let f3promise= fs.promises.readFile("./f3.txt");
    return  f3promise;
})
.then(function(data){
    console.log(data+"");
})

