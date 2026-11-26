/*  ============================

page.goto()
page.goback()
page.goForward()
page.reload()

*/

import {test,expect} from '@playwright/test'

//1)page.goto(url)
//page.goto(url,options)
//page.goto(url,{})

test('Test1', async({page, browser})=>{
    let response =await page.goto('https://www.flipkart.com/',{
    timeout:30_000,
    waitUntil:'load'
});
let pageTitle:string = await page.title();
console.log('Page title is ', pageTitle)
console.log(response?.status())
//goback

await page.goto('https://www.amazon.in/',{waitUntil:'load'})
await page.goBack({waitUntil:'load'})
await page.goForward({waitUntil:'load'});
await page.reload({waitUntil:'load'});

//page info methods=> you are getting or extract info from browser
//page title



expect(pageTitle).toContain('Online Shopping Site for Mobiles')

let pageUrl = await page.url();
console.log('current page url', pageUrl)

//page content

console.log(await page.content())

let viewPortSize = page.viewportSize()
console.log('viewPortSize', viewPortSize)

console.log(page.isClosed())

await page.close();

console.log(page.isClosed())

//browser info

//support methods
})