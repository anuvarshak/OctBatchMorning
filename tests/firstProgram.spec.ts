/*
Browser: actual browser insatnce launched by your playwright
//binary
//real browser


*/

import {test, expect,chromium} from '@playwright/test'

test('Launching chromium Binary',async ()=>{

    console.log('this is first program')
    let browser= await chromium.launch({
        headless:false

    });



/*
browser context:separate browser session created inside a browser
each browser context will have separate:
cookies
local storage
session storage
cache and session related state
*/

let context1= await browser.newContext();
let context2= await browser.newContext();

/* page: individual browser tab within the browser context 
 A browser context can contain multiple tabs */


let page1 = await context1.newPage();
let page2 = await context1.newPage();

await page1.goto('https://www.amazon.in/')
await page2.goto('https://www.flipkart.com/')

})


test ('launching chrome by using fixture', async ({page}) => {
    await page.goto('https://www.amazon.in/')

    await  page.context().storageState({
        path:'auth.json'
    })

    let browserContext = await page.context()
    browserContext.cookies()

})





