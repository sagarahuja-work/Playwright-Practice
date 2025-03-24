import { test, Page, expect, Locator } from "@playwright/test";
import data from "../../testdata.json";
import { randomInt } from "crypto";

export class UnicornWelcomePage {
    public page : Page;
    public dealNumber : string;
  
    public paymentType : string;
    readonly welcomeMessage_Lct : Locator;
    readonly profileIcon_Lct : Locator;
    readonly logoutButton_Lct : Locator;
    readonly propertyAddress_Lct : Locator;
    readonly dealNumber_Lct : Locator;
    readonly purchaseButton_Lct : Locator;
    readonly saleButton_Lct : Locator;
    readonly rentButton_Lct : Locator;
    readonly cashButton_Lct : Locator;
    readonly financeButton_Lct : Locator;
    readonly createNewDealButton_Lct : Locator;




    constructor(page : Page) 
    {
        this.page = page;
        this.dealNumber = data.Deal_Number+randomInt(1,1000);
        this.welcomeMessage_Lct = page.locator(".dashboard-title");
        this.profileIcon_Lct = page.locator("div[class='profile-icon'] span");
        this.logoutButton_Lct = page.getByText('Logout');
        this.propertyAddress_Lct = page.locator("#address");
        this.dealNumber_Lct = page.locator("#fileNumber");
        this.purchaseButton_Lct = page.getByText('Purchase');
        this.saleButton_Lct = page.getByText('Sale');
        this.rentButton_Lct = page.getByText('Rent');
        this.cashButton_Lct = page.getByText('Cash');
        this.financeButton_Lct = page.getByText('Finance');
        this.createNewDealButton_Lct = page.locator("button[type='submit']");


    }

    async verifyWelcomePage(){
        await this.profileIcon_Lct.hover();
        expect(await this.page.url()).toBe(data.WelcomePage_url);
        expect(await this.welcomeMessage_Lct.textContent(), "Welcome page Not Openend").toBe("Welcome to");
    }

    async verifyLogoutButton(){
        await this.profileIcon_Lct.click();
        await expect(this.logoutButton_Lct).toBeVisible({timeout : 10000});
        await this.profileIcon_Lct.click();

    }

    async createNewDeal(dealType : string, paymentType : string){

        
        await this.propertyAddress_Lct.fill(data.Property_Address);
       
        await this.dealNumber_Lct.fill(this.dealNumber);
        console.log("deal no.----->"+this.dealNumber);
        

        //const dealNumbertyped = dealNumber;
        
        if (dealType == "Purchase") {
            await this.purchaseButton_Lct.click()}
        else if(dealType == "Sale") {
            await this.saleButton_Lct.click()}
        else if(dealType == "Rent") {
            await this.rentButton_Lct.click()}

        if (paymentType == "Cash") { 
            await this.cashButton_Lct.check()}
        else if (paymentType == "Finance") {
            await this.financeButton_Lct.check()}

        await this.createNewDealButton_Lct.click();

    }

    async returnDealData()
    {   
        console.log(this.dealNumber);
        
        return this.dealNumber;

    }

}   