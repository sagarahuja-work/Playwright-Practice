import { Given, When, Then } from '@cucumber/cucumber'
import { ecom_Practise_URL } from "../../utils/constants.js";
import {  } from "../../Data/loginCredentials.csv";

//import poManager from '../../pageobjects/POManager.js';
//import assert from 'assert'

import { chromium , expect} from '@playwright/test'
    
Given('A login to Ecommerce application with {string} and {string}',{timeout : 100*1000}, async function (username, password) {
    
    this.loginPage =  this.POMobject.getLoginPage();
    this.dashboardPage = this.POMobject.getDashboaredPage();
    this.myCartPage = this.POMobject.getMyCartPage();

        await this.loginPage.goToLoginPage();
        await this.loginPage.ValidLogin(username,password)
  });


  When('Add product {string} to cart', async function (productName) {
        this.desiredProductName = productName;
   
    await  this.dashboardPage.searchProduct(this.desiredProductName);
    await  this.dashboardPage.navigateToCart();

  });


  Then('Verify selected product diplayed in the cart', async function () {

    
    await this.myCartPage.vaidateCart(this.desiredProductName);
    await this.myCartPage.cartCheckout();


  });

  When('Enter valid details and place the Order', async function () {
    //const POManagerObject = new POManager(page);
    await this.page.locator("//div[@class='field']//input[@class='input txt text-validated']").fill("4542 9931 9292 2293");

    await this.page.getByRole('combobox').first().selectOption('10');
    await this.page.getByRole('combobox').nth(1).selectOption('20');
    await this.page.locator("//div[@class='field small']").locator("//input[@class='input txt']").fill("123");
    await this.page.locator("//div[@class='field']").locator("//input[@class='input txt']").fill("Test Name")

    //handle suggestive dropdown

    await this.page.locator("input[placeholder='Select Country']").pressSequentially("Ind");
    const countryDropdown  = this.page.locator("//section[@class='ta-results list-group ng-star-inserted']");
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
    
    await this.page.getByText('Place Order').click();

    //await assert(this.page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
            
        this.fetchOrderID = await this.page.locator("label[class='ng-star-inserted']").innerText();
        this.orderID = this.fetchOrderID.split("|")[1].trim();
        console.log("Order created with Order ID : "+this.orderID);

  });


  Then('Verify placed order is present in order history', async function () {
    //const POManagerObject = new POManager(page);
    await this.page.locator("//button[@routerlink='/dashboard/myorders']").click();
        const orderTable = this.page.locator("//table[@class='table table-bordered table-hover ng-star-inserted']//tbody");
        await orderTable.waitFor({state : 'visible'});
        const totalOrders = await orderTable.locator("//tr").count();
        console.log("Total orders in table : "+ totalOrders);
        
        for (let rowNumber = 0; rowNumber < totalOrders; rowNumber++) {
            
            const orderIDFromTable = await orderTable.locator("//tr").nth(rowNumber).locator("//th").textContent();
                 
            if (this.fetchOrderID.includes(orderIDFromTable)) {
                console.log(`Order Id from Table = ${orderIDFromTable}`);
                
                await orderTable.locator("//tr").nth(rowNumber).locator("//button[@class='btn btn-primary']").click();
                break;
            }
            
        }
    
        await expect(this.page.locator("//div[@class='email-title']")).toBeVisible();
        await expect(this.page.locator("//div[@class='email-title']")).toHaveText(" order summary ");
    
        const orderDetails = await this.page.locator("//div[@class='col-text -main']").textContent();
        console.log(`order details : ${orderDetails}`);
        
        expect(orderDetails).toContain(this.orderID);
    
        //await this.page.pause();
        //await this.page.close();
  });

  Given('Login to website with invaild credentials as {string} and {string}', async function (username, password) {

    await this.page.goto(ecom_Practise_URL);
    await this.page.locator('input#username').fill(username);
    await this.page.locator("[type='password']").fill(password);
    await this.page.locator('input#terms').check();
    await this.page.locator("[value='Sign In']").click();
  });

  Then('Verify error msg is displayed', async function () {
    
    console.log(await this.page.locator("[style*='block']").textContent());
    await expect(this.page.locator("[style*='block']")).toContainText("Incorrect");
    //await this.page.close();
  });