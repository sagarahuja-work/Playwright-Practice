import { test, Browser, chromium, firefox, webkit, expect, Page } from '@playwright/test';
import { BrowserControls } from '../../pwUtils/BrowserControls';




test("Box login from diff browsers", async({browserName}) => {
    console.log("Browser name conatins ->" +browserName);
    //let browser : Browser;

    const bcObject = new BrowserControls();         //we are creating object for browser controls
    await bcObject.launchBrowser(browserName);     //we are lauching browser

    const page = await bcObject.openPageTab();    //We are opening page
    

    await page.goto("https://account.box.com/login");
        
        await page.locator("id=login-email").fill('sagar.ahuja@yash.com');
    
        await page.locator("id=login-submit").click();
    
        await page.locator("id=password-login").fill('Sagar@24');
    
        await page.locator("id=login-submit-password").click();
        await expect(page).toHaveTitle('All Files | Powered by Box');
    
        await page.locator("button[data-resin-target='accountmenu']").click();
    
        await page.locator("//a[@data-testid = 'account-menu-logout']").click();
    
        await page.close();


});


