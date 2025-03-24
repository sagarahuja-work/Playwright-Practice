import { test, Browser, chromium, firefox, webkit, expect, Page } from '@playwright/test';

let browser : Browser;

test("Box login from diff browsers", async({browserName}) => {
    console.log("Browser name conatins ->" +browserName);
    

    if (browserName == 'chromium') {
        
        browser = await chromium.launch({headless : true});
        console.log("Opens on chromium");
    }

    else if (browserName == 'firefox') {

        browser = await firefox.launch({headless : true})
        console.log("Opens on firefox");
        
    }

    else if (browserName == 'webkit') {

        browser = await webkit.launch({headless : true})
        console.log("Opens on webkit");
        
    }
    
    const context = await browser.newContext();
    const page = await context.newPage();

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


