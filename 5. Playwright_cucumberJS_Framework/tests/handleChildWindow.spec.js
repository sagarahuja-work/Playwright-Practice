import { test, expect } from '@playwright/test';
 
 
 
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "sagar@ahuja.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iams@gar1");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})

test("UI Cotrols", async ({page})=>{
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const username =  page.locator("#username");
   const password = page.locator('#password');
   const dropdown = page.locator('select.form-control');
   const terms = page.locator('#terms');
   await username.fill("rahulshettyacademy");
   await password.fill("learning");
   await page.locator('.radiotextsty').last().click();
   await page.locator('#okayBtn').click();
   await expect (page.locator('.radiotextsty').last()).toBeChecked();
   await dropdown.selectOption('teach');
   await terms.uncheck();
   expect(await terms.isChecked()).toBeFalsy();
   await expect(page.locator("//a[@href='https://rahulshettyacademy.com/documents-request']")).toHaveAttribute('class', 'blinkingText')


});

test("Handling child window", async ({browser})=>{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const documentLink = page.locator("//a[@href='https://rahulshettyacademy.com/documents-request']");
   
   const [childPage] = await Promise.all
                        (
                           [
                              context.waitForEvent('page'), //this listen for any new page - pending,rejected,fulfilled
                              await documentLink.click(),
                           ]
                        );
                        const text = await childPage.locator(".red").textContent();
                        console.log(text);
                        const arrayText = text.split("@");
                        console.log(arrayText);
                        
                        const domainName = arrayText[1].split(".")[0];
                        console.log("username : "+domainName);
                    
                        //switching back to new page
                        await page.locator('input#username').fill(domainName);
                        await page.locator("[type='password']").fill("learning");
                        await page.locator('input#terms').check();
                        await page.locator("[value='Sign In']").click();





});
