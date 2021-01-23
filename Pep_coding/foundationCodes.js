const puppeteer = require ("puppeteer");
const id = "mafoh40363@yutongdt.com";
const pw= "9711462586";
let tab;

let browserOpenPromise = puppeteer.launch({
    headless : false,
    defaultViewport : null,
    args : ["--start-maximized,"], 
});

browserOpenPromise
  .then(function (browser) {
    // console.log("Browser opened !!!");
    let pagesPromise = browser.pages();
    return pagesPromise;
  })
  .then(function(pages) {
    let page = pages[0];
    tab = page;
    let gotoPromise = tab.goto("https://www.pepcoding.com/login");
    return gotoPromise;
   })
   .then(function(){
    let idPromise = tab.type( `#login input[name="email"] `, id);
    return idPromise;
   })
   .then(function(){
     let pwPromise= tab.type(`#login input[name="password"] `,pw);
   })
   .then