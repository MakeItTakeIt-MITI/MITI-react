import { test, expect } from "@playwright/test";


test('meta title and description exact values', async ({ page }) => {
    await page.goto('http://localhost:3000'); // requires baseURL in playwright.config.ts

    // page title
    await expect(page).toHaveTitle('Make It Take It');

    // OG meta
    const ogTitle = await page.locator('head meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBe('Make It Take It');

    const ogDesc = await page.locator('head meta[property="og:description"]').getAttribute('content');
    expect(ogDesc).toBe('농구인의 필수앱');
});