import { expect, Locator,Page } from "@playwright/test";

export class boxLoginPage {

public page : Page;
readonly email_lct : Locator;
readonly nextButton_lct : Locator;
readonly password_lct : Locator;
readonly loginButton_lct : Locator;

constructor(page : Page)
{
    this.page = page;
    this.email_lct = this.page.locator("id=login-email");
    this.nextButton_lct = this.page.locator("id=login-submit");
    this.password_lct = this.page.locator("id=password-login");
    this.loginButton_lct = this.page.locator("id=login-submit-password");
    
}

async loginToBox()
{
    await this.email_lct.fill('sagar.ahuja@yash.com'); 
    await this.nextButton_lct.click();
    await this.password_lct.fill('Sagar@24');
    await this.loginButton_lct.click();
    await expect(this.page).toHaveTitle('All Files | Powered by Box');

}

};