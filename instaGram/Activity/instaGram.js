const { TouchBarLabel } = require("electron");
let puppeteer = require("puppeteer");
const id = "_yogesh2501_";
const pw = "9711462586";

(async function()
{
    let browser = await puppeteer.launch({headless : false ,  args: ["--start-maximized"], defaultViewport:null} );
    let  tab = await browser.newPage();
    await tab.goto("https://www.instagram.com/" , { waitUntil: "networkidle2" });
    await tab.waitForSelector(`input[name="username"]`);
    await  tab.type(`input[name="username"]` , id);
    await tab.waitForSelector(`input[name="password"]`)
    await tab.type(`input[name="password"]`, pw)
    await tab.waitForSelector(`button[type="submit"]`)
    await tab.click(`button[type="submit"]`)
    // console.log("login")
    await tab.waitForSelector(`input[placeholder="Search"]` , {visible:true} , {delay:100});
    await tab.type(`input[placeholder="Search"]` , "pepcoding");
    
})();
