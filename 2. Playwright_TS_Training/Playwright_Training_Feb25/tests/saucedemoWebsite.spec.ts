import {test, expect, Page} from "@playwright/test"
[
    { username: 'standard_user', password: 'secret_sauce' },

].forEach(({username,password}) => {

     test(`Sauce-Demo Test for ${username}` , async({page})=>{

            let addToCartCount;
            let productPriceOnPLP;
            let productNameonPLP;

            await test.step('Step 1: Open URL', async()=>
            {
                await page.goto("https://www.saucedemo.com/");
            });

            await test.step('Step 2: Login with Credentials', async()=>{
                await page.locator("//input[@placeholder='Username']").fill(username);
                await page.locator("//input[@placeholder='Password']").fill(password);
                await page.locator("//input[@id='login-button']").click();
                //expect(page.url(), "Login failed").toBe("https://www.saucedemo.com/inventory.html");    //assert login  
            });

            
            await test.step("Step 3: Add product to cart and checkout", async()=> {

                await page.locator("//button[@id='add-to-cart-sauce-labs-fleece-jacket']").click();
                await page.locator("//a[@class='shopping_cart_link']").click();
                await page.locator("//button[@id='checkout']").click();

                await expect (page.locator("//span[@class='title']")).toContainText("Checkout: Your Information");
                await page.locator("//input[@id='first-name']").fill("sagar");
                await page.locator("//input[@id='last-name']").fill("ahuja")
                await page.locator("//input[@id='postal-code']").fill("1111");
                await page.locator("//input[@id='continue']").click();

                

            });

            await test.step("Step 4: Place order", async()=>{

                
                //page.screenshot();
                await page.locator("//button[@id='finish']").click();
                await expect(page.locator("//h2[@class='complete-header']")).toContainText("Thank you for your order!");
                //page.screenshot();



            });

            await page.close();
    });




});    
    
