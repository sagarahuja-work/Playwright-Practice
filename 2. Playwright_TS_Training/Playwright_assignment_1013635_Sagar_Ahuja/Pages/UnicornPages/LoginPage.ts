import { expect, Locator,Page } from "@playwright/test";
import { TIMEOUT } from "dns";
import { url } from "inspector";
import { Url } from "url";

export class UnicornLoginPage {

    public page: Page;
    readonly username_locator : Locator;
    readonly password_locator : Locator;
    readonly loginButton_locator : Locator;


    constructor(page : Page)
    {
        this.page = page;
        this.username_locator = page.locator("#inputUserName");
        this.password_locator = page.locator("#inputPassword");
        this.loginButton_locator = page.getByRole('button', { name: 'SIGN IN' });
        


    };

    async openUnicorn(url : string)
    { 
        await this.page.goto(url);
        expect(this.username_locator, "Site not loaded properly").toBeVisible({ timeout: 10000 });
        
        
    };

    async loginUnicorn(username : string ,password : string)
    {
        await this.username_locator.click();
        await this.username_locator.fill(username);
        await this.password_locator.fill(password);
        await this.loginButton_locator.click();
        await expect(this.page.url, "Login Failed").not.toBe(url);
    };
};