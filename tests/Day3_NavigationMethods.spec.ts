import {test,expect} from '@playwright/test'

//1)page.goto(url)
//page.goto(url,options)
//page.goto(url,{})

test('Test1', async({page})=>{
    let response =await page.goto('https://www.flipkart.com/',{
    timeout:30_000,
    waitUntil:'domcontentloaded'
});
console.log(response?.status())
//goback
await page.goto('https://www.amazon.in/',{waitUntil:'load'})
await page.goBack({waitUntil:'load'})
await page.goForward();
await page.reload();0
})