import {test, expect} from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

//Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    console.log('Pratcice second Push');
});

test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.click('text=Get Started');

    // expect page to have a heading with "Get Started"
    await expect(page.locator('h1')).toHaveText('Get Started');
    console.log('Pratcice third Push');
});