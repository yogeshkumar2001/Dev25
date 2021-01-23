let fs = require("fs");
let files= ["../f1.txt","../f2.txt","../f3.txt",];

for (let i=0; i <files.length-1;i++){
    for (let j=i+1; j <files.length;j++)
    {
        fs.readFile("files[i]", function (error, data) {
            console.log(data + "");
            fs.readFile("files.[j]", function (error, data) {
              console.log(data + "");
            });
          });
    }

}