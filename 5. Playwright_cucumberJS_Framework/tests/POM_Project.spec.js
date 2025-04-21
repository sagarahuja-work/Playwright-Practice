import { test, expect, page } from "@playwright/test";
import { POManager }  from "../pageobjects/POManager";
import testData  from "../utils/clientAppTestData.json";

for (const data of testData) {
    console.log(data.username);
    

test(`Client-APP LOGIN - Test Case for ${data.username}`, async ({page})=>{
    
    
    const POManagerObject = new POManager(page);
    
    //const products = page.locator(".card-body");
    const desiredProductName = data.productname;
    console.log(data.username);
    
    const loginPage =  POManagerObject.getLoginPage();
    const dashboardPage = POManagerObject.getDashboaredPage();
    const myCartPage = POManagerObject.getMyCartPage();

    await loginPage.goToLoginPage();
    await loginPage.ValidLogin(data.username, data.password)
    await dashboardPage.searchProduct(desiredProductName);
    await dashboardPage.navigateToCart();
    await myCartPage.vaidateCart(desiredProductName);
    await myCartPage.cartCheckout();

    
    await page.locator("//div[@class='field']//input[@class='input txt text-validated']").fill("4542 9931 9292 2293");

    await page.getByRole('combobox').first().selectOption('10');
    await page.getByRole('combobox').nth(1).selectOption('20');
    await page.locator("//div[@class='field small']").locator("//input[@class='input txt']").fill("123");
    await page.locator("//div[@class='field']").locator("//input[@class='input txt']").fill("Test Name")

    //handle suggestive dropdown

    await page.locator("input[placeholder='Select Country']").pressSequentially("Ind");
    const countryDropdown  = page.locator("//section[@class='ta-results list-group ng-star-inserted']");
    await countryDropdown.waitFor();

    const countryDropdownOptions = await countryDropdown.locator("//button[@type='button']").count();

    for (let i = 0; i < countryDropdownOptions; i++) {
        
        const countryName = await countryDropdown.locator("//button[@type='button']").nth(i).innerText();
        //console.log(countryName);

        if (countryName === ' India') {
            console.log(countryName);
            
            await countryDropdown.locator("//button[@type='button']").nth(i).click();
            break;
        }
    }
    
    await page.getByText('Place Order').click();

    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
        
    const fetchOrderID = await page.locator("label[class='ng-star-inserted']").innerText();
    const orderID = fetchOrderID.split("|")[1].trim();
    console.log("Order created with Order ID : "+orderID);
    
    //Validate order ID on Order History
    await page.locator("//button[@routerlink='/dashboard/myorders']").click();
    const orderTable = page.locator("//table[@class='table table-bordered table-hover ng-star-inserted']//tbody");
    await orderTable.waitFor({state : 'visible'});
    const totalOrders = await orderTable.locator("//tr") .count();
    console.log("Total orders in table : "+ totalOrders);
    
    for (let rowNumber = 0; rowNumber < totalOrders; rowNumber++) {
        
        const orderIDFromTable = await orderTable.locator("//tr").nth(rowNumber).locator("//th").textContent();
             
        if (fetchOrderID.includes(orderIDFromTable)) {
            console.log(`Order Id from Table = ${orderIDFromTable}`);
            
            await orderTable.locator("//tr").nth(rowNumber).locator("//button[@class='btn btn-primary']").click();
            break;
        }
        
    }

    await expect(page.locator("//div[@class='email-title']")).toBeVisible();
    await expect(page.locator("//div[@class='email-title']")).toHaveText(" order summary ");

    const orderDetails = await page.locator("//div[@class='col-text -main']").textContent();
    console.log(`order details : ${orderDetails}`);
    
    expect(orderDetails).toContain(orderID);

    await page.pause();
    await page.close();


    
});
};
