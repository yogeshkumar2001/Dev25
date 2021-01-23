const request = require("request");
const cheerio = require("cheerio");
const getMatch = require("./matches");



function getAllMatches(link){
    request(link , cb);
}

function cb(error , response , data){
    if(error == null){
        parseData(data);
    }
    else if(response.statusCode == 404){
        console.log("Page not found !!");
    }
    else{
        console.log(error);
    }
}
function parseData(html){
    // console.log(html);
    let ch= cheerio.load(html);
    let allTags = ch('a[data-hover="Scorecard"]');
    
    for(let i=0; i<allTags.length;i++){
        let link=ch(allTags[i]).attr("href");
        let completeLink=`https://www.espncricinfo.com${link}`;
        // console.log(completeLink);
        getMatch(completeLink);
    }

}


module.exports= getAllMatches;