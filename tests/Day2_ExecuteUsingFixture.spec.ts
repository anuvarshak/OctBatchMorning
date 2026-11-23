import {test,expect} from '@playwright/test'

test('running in different binaries and browsers', async ({page})=>{
    await page.goto('https://www.amazon.com/');
})