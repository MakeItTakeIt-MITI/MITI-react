// tests/navbar.e2e.spec.ts
import { test, expect } from "@playwright/test";

//npx playwright test  to run
test.describe("Browser Desktop Navbar", () => {
    test("highlights '경기 목록' when on /games", async ({ page }) => {
        await page.goto("http://localhost:3000/games"); // or your deployed domain

        const gamesLink = page.getByRole("link", { name: "경기 목록" });

        await expect(gamesLink).toBeVisible();

        const color = await gamesLink.evaluate((el) => {
            return window.getComputedStyle(el).color;
        });

        expect(color).toBe("rgb(26, 220, 223)"); // equivalent to #1ADCDF
    });


});


test.describe("Tests routing for the Navigation Bar", () => {
    test('NAVBAR - Navigates to Games page', async ({ page }) => {
        await page.goto('/');

        const gamesLink = page.getByRole('link', { name: '경기 목록' });

        await gamesLink.click();

        await expect(page).toHaveURL(/\/games/);
    });


    test("NAVBAR - Navigates to Courts Page ", async ({ page }) => {
        await page.goto("/");
        const courtsLink = page.getByRole("link", { name: "경기장 목록" });

        await courtsLink.click();

        await expect(page).toHaveURL(/\/courts/);
    });


})

