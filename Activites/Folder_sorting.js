const fs= require("fs");
 let files= fs.readdirSync("./testFolder");
 for(let i=0; i<files.length;i++){
     fs.sortFolder(files[i]);
 }

function fileExtension(file){
 return fs.file.split(".").pop();
}
function ExistFolder(extension){
    if(extension =="jpg"||extension =="gif"||extension =="jpeg"){
        return fs.existsSync("./testFolder/Images");
    }
    else if(extension =="pdf"||extension =="txt"||extension =="doc"){
        return fs.existsSync("./testFolder/Documents");
    }
}
function createfolder(extension){
    if(extension =="jpg"||extension =="gif"||extension =="jpeg"){
        return fs.mkdirSync("./testFolder/Images");
    }
    else if(extension =="pdf"||extension =="txt"||extension =="doc"){
        return fs.mkdirSync("./testFolder/Documents");
    }
}
function moveFile(file , extension){
    if(extension =="jpg"||extension =="gif"||extension =="jpeg"){
        let pathsf= `./testFolder/${file}`;
        let pathds= `/testFolder/Images/${file}`;
        fs.copyFileSync(pathsf , pathds);
        fs.unlinkSync(pathsf); 

    }
    else if(extension =="pdf"||extension =="txt"||extension =="jpeg"){
        let pathsf= `./testFolder/${file}`;
        let pathds= `/testFolder/Images/${file}`;
        fs.copyFileSync(pathsf , pathds);
        fs.unlinkSync(pathsf); 
    }  
}


function sortFolder(file){
    let extension = fileExtension(file);
    let existFolder= ExistFolder(extension);
    if(!existFolder){
        createfolder(extension);
    }
    moveFile(file , extension);
}