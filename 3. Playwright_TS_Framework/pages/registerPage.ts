import { expect, Locator, Page } from "@playwright/test";


export class registerPage{

    public page : Page;
    readonly firstName : Locator;
    readonly lastName : Locator;
    readonly email : Locator;
    readonly telephone : Locator;
    readonly password : Locator;
    readonly confirmPassword : Locator;
    readonly agreePolicy : Locator;
    readonly continueRegisterButton : Locator;
    readonly successMessage : Locator;
    readonly continueButton : Locator;



    constructor(page : Page){

        this.page = page;
        this.firstName = page.locator("#input-firstname");
        this.lastName = page.locator("#input-lastname");
        this.email = page.locator("#input-email");
        this.telephone = page.locator("#input-telephone");
        this.password = page.locator("#input-password");
        this.confirmPassword = page.locator("#input-confirm");
        this.agreePolicy = page.locator("label[for='input-agree']");
        this.continueRegisterButton = page.locator("input[value='Continue']");
        this.successMessage = page.locator(".page-title.my-3");
        this.continueButton = page.locator("a[class='btn btn-primary']");



    }

    async gotoRegisterUrl()
    { 
        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
       
    };

    async enterFirstName()
    { 
        await this.firstName.click();
        await this.firstName.fill("Yash");
        
    };

    async enterLastName()
    { 
        await this.lastName.click();
        await this.lastName.fill("Tech");
        
    };

    async enterEmail()
    { 
        await this.email.click();
        await this.email.fill("lamdatestuser112@gmail.com");
        
    };

    async enterTelephoneNumber()
    { 
        await this.telephone.click();
        await this.telephone.fill("9876543210");
        
    };

    async enterPassword()
    { 
        await this.password.click();
        await this.password.fill("Password@123");
        
    };

    async enterConfirmPassword()
    { 
        await this.confirmPassword.click();
        await this.confirmPassword.fill("Password@123");
        
    };

    async checkAgreePolicy()
    { 
        await this.agreePolicy.check();
        
    };

    async clickContinue(){
        await this.continueRegisterButton.click();
        await expect(this.successMessage).toHaveText(" Your Account Has Been Created!");
        await this.continueButton.click();
    }

    

}