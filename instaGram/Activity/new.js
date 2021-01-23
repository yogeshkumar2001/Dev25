const puppeteer = require('puppeteer');
const id = "likecof942@vy89.com";
const pw = "9711462586";
(async function () {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/', { waitUntil: "networkidle2" });
    await page.type("input[name='username']", id, { delay: 100 });
    await page.type("input[name='password']", pw, { delay: 100 });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("button[type='submit']"),
    ]);