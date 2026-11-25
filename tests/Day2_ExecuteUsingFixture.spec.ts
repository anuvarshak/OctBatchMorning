import {test,expect} from '@playwright/test'

test('running in different binaries and browsers', async ({page})=>{
    await page.goto('https://www.amazon.com/');
})

test('test2', async ({page})=>{
    await page.goto('https://www.amazon.com/');
})

test('test3', async ({page})=>{
    await page.goto('https://www.amazon.com/');
}
)