import test, { expect } from "@playwright/test";

test("First Box Login",async({page})=>{
    await page.goto("https://account.box.com/login");
    await page.url
    
    await page.locator("id=login-email").fill('sagar.ahuja@yash.com');

    await page.locator("id=login-submit").click();

    await page.locator("id=password-login").fill('Sagar@24');

    await page.locator("id=login-submit-password").click();
    await expect(page).toHaveTitle('All Files | Powered by Box');

    await page.locator("button[data-resin-target='accountmenu']").click();

    await page.locator("//a[@data-testid = 'account-menu-logout']").click();

    await page.close();
})