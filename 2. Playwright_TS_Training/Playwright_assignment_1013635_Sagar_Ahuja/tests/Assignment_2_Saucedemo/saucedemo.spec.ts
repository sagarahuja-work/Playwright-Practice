import {test, expect, Page} from "@playwright/test"
import { count } from "console";
//test.describe.configure({mode : 'serial'});





test(`Sauce-Demo Test` , async({page})=>{

    
            let addToCartCount;
            let productPriceOnPLP;
            let productNameonPLP;
            

            await test.step('Step 1: Open URL', async()=>
            {
                await page.goto("https://www.saucedemo.com/");
            });

            await test.step('Step 2: Login with Credentials', async()=>{
                const allUsername = await page.locator("//div[@id='login_credentials']").textContent();
                console.log("all username -->"+allUsername);
                const splitUsername = allUsername?.split(":")[1].split("user")[0];
                console.log("After spliting username string");
                const username = splitUsername+"user";
                console.log("User_Name===>"+username);

                const passwordString = await page.locator("//div[@class='login_password']").textContent();
                const password= String(passwordString?.split(":")[1]);
                console.log("Password ===>"+password);
                
                await page.locator("//input[@placeholder='Username']").fill(username);
                await page.locator("//input[@placeholder='Password']").pressSequentially(password , {delay : 800});
                await page.locator("//input[@id='login-button']").click();
                expect(page.url(), "Login failed").toBe("https://www.saucedemo.com/inventory.html");    //assert login  
            });
         
            await test.step('Step 3: Count add to cart buttons', async()=>{

                addToCartCount = await page.locator("//button[@class='btn btn_primary btn_small btn_inventory ']").count();
                console.log("No. of Add to cart buttons : "+addToCartCount);
                expect(addToCartCount).toBe(6);


            });
            
            await test.step('Step 4: Low to High - Sort the items by price Validate the sorting', async()=>{

                await page.locator("//span[@class='select_container']").click();
                await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
                
                // take out pricelist array
                var UIpricelist :number[] = []
                for (let i = 1; i<=addToCartCount; i++) {
            
    
                    const priceWithCurrency = await page.locator(`//div[@class='inventory_item'][${i}]`).locator("//div[@class='inventory_item_price']").innerText();
            
                    let itemPrice = Number(priceWithCurrency.slice(1))
    
                    UIpricelist.push(itemPrice)
    
                    
                }
                
                let unsortedPriceList = [...UIpricelist];
                console.log("Orignal Price list from UI-->"+unsortedPriceList)

                //compare pice sorting with actual and expected
    
                let asced_sortedpriceList = UIpricelist.sort((a,b) => {return(a-b)});
                //console.log("sorted pricelist: "+sortedpriceList);
                console.log("Sorted pricelist-(Low to High)--> "+asced_sortedpriceList);
                
                
                if (unsortedPriceList.toString() === asced_sortedpriceList.toString())
                {
                
                    console.log("Sorting is working properly i.e. low to high")
                }
                
                else
                {
                    console.log("Low to High Sorting is NOT working properly")
                }


            });

            await test.step('Step 5: High to Low - Sort the items by price(desc) Validate the sorting', async()=>{

                await page.locator("//span[@class='select_container']").click();
                await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
                
                // take out pricelist array
                var UIpricelist :number[] = []
                for (let i = 1; i<=addToCartCount; i++) {
            
    
                    const priceWithCurrency = await page.locator(`//div[@class='inventory_item'][${i}]`).locator("//div[@class='inventory_item_price']").innerText();
            
                    let itemPrice = Number(priceWithCurrency.slice(1))
    
                    UIpricelist.push(itemPrice)
    
                    
                }
                
                let unsortedPriceList = [...UIpricelist];
                console.log("Orignal Price list from UI-->"+unsortedPriceList)

                //compare pice sorting with actual and expected
    
                let desc_sortedpriceList = UIpricelist.sort((a,b) => {return(b-a)});
               
                console.log("Sorted pricelist-(High to low)--> "+desc_sortedpriceList);
                
                
                if (unsortedPriceList.toString() === desc_sortedpriceList.toString())
                {
                
                    console.log("Sorting is working properly i.e. high to low")
                }
                
                else
                {
                    console.log("High to Low Sorting is NOT working properly")
                }
            


            });

            
            await test.step("Step 6: Add product to cart and checkout", async()=> {

                productNameonPLP = await page.locator(`//div[@class='inventory_item'][1]`).locator("//a[@id='item_5_title_link']").innerText();
                console.log("product name : "+productNameonPLP);
                
                productPriceOnPLP = await page.locator(`//div[@class='inventory_item'][1]`).locator("//div[@class='inventory_item_price']").innerText();
                console.log("product price : "+productPriceOnPLP);
                await page.locator("//button[@id='add-to-cart-sauce-labs-fleece-jacket']").click();
                await page.locator("//a[@class='shopping_cart_link']").click();
                await page.locator("//button[@id='checkout']").click();

                await expect (page.locator("//span[@class='title']")).toContainText("Checkout: Your Information");
                await page.locator("//input[@id='first-name']").fill("sagar");
                await page.locator("//input[@id='last-name']").fill("ahuja")
                await page.locator("//input[@id='postal-code']").fill("1111");
                await page.locator("//input[@id='continue']").click();

                

            });

            await test.step("Step 7: Verify Information on Checkout and place order", async()=>{

                const productNameOnCheckout = await page.locator(`//div[@class='cart_item'][1]`).locator("//a[@id='item_5_title_link']").innerText();
                expect(productNameOnCheckout, "Product Name validation failed on checkout").toBe(productNameonPLP);
                const productPriceOnCheckoutPage = await page.locator("//div[@class='cart_item_label']").locator("//div[@class='inventory_item_price']").innerText();
                expect(productPriceOnCheckoutPage, "Price validation failed on checkout").toBe(productPriceOnPLP);
                //page.screenshot();
                await page.locator("//button[@id='finish']").click();
                await expect(page.locator("//h2[@class='complete-header']")).toContainText("Thank you for your order!");
                //page.screenshot();



            });

            await page.close();
    });




   
    
