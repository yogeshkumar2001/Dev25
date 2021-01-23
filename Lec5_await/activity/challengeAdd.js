const puppeteer = require("puppeteer");
const id = "mafoh40363@yutongdt.com";
const pw= "9711462586";
const challenges = require("./challenges");

(async function(){
 try{
let browser = await puppeteer.launch({
    headless :false,
    defaultViewport :null,
    args: ["--start-maximized"],
});
// let pages = await browser.pages();
let tab= await browser.newPage();
// let tab= pages[0];
await tab.goto("https://www.hackerrank.com/auth/login")
await tab.type("#input-1" , id);
await  tab.type( "#input-2" , pw );
// await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"); 
// await Promise.all([tab.waitForNavigation({waitUntil:"networkidle2" }) , tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled")]);
// load => when client gets the data
// domcontentloaded => when data in loaded on the dom on the client side
// networkidle0 => first 500ms jaha pe client se at max 0 request
// networkidle2 => first 500ms jaha pe apke client se at max 2 request
// await tab.click(".ui-icon-user.default-user-icon") 
await Promise.all([waitForNavigation({waitUntil:"networkidle2"}, tab.click(`a[data-analytics="NavBarProfileDropDownAdministration"]`))]);
let bothlis =await tab.$$(".nav-tabs.nav.admin-tabbed-nav li");
let manageLi= bothli[1];
await Promise.all([waitForNavigation({waitUntil:"networkidle2"}), manageLi.click()])
let challengebtn= await tab.$("btn btn-green backbone pull-right");
let challengelink = await tab.evaluate(function(ele){ return element.getAttribute("href")} , challengebtn);
challengelink = `https://www.hackerrank.com${challengelink}`;
for(let i= 0 ; i<challenges.length ; i++){
    let newTab = await browser.newPage();
    addchallenge(challengelink , newTab);
} 
}

 catch{
console.log(error);
 }
})();

async function addchallenge(challengelink , newTab){
    await newTab.goto(challengelink);
}