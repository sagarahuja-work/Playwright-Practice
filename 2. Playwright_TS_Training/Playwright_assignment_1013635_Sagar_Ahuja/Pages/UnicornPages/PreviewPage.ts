import {Page,expect,Locator} from "@playwright/test";
import data from "../../testdata.json";
import { log } from "node:console";
import {UnicornWelcomePage} from "../../Pages/UnicornPages/WelcomePage";


export class unicornPreviewPage
{
    public page : Page;
    public dealNumber : any;
    readonly prv_table_Lct : Locator;
    readonly prv_tableRows_Lct : Locator;
    readonly prv_dealNumber_Lct : Locator;
    readonly prv_propertyType_Lct : Locator;
    readonly prv_transactionType_Lct : Locator;
    readonly prv_cashClosing_Lct : Locator;
    readonly prv_loanAmount_Lct : Locator;
    readonly prv_bookingDate_Lct : Locator;
    readonly prv_closingDate_Lct : Locator;
    readonly prv_agentName_Lct : Locator;
    readonly prv_mobileNumber_Lct : Locator;
    readonly prv_ownerName_Lct : Locator;
    readonly prv_propertyAddress_Lct : Locator;
    readonly prv_uploadImage_1_Lct : Locator;
    readonly prv_uploadImage_2_Lct : Locator;
    readonly prv_downloadButton_Lct : Locator;
    readonly profileIcon_Lct : Locator;
    readonly logoutButton_Lct : Locator;
    public propertyType: string | null;
    public transactionType: string | null;
    public cashClosing: string | null;
    public loadAmount: string | null;
    public bookingDate: string | null;
    public closingDate: string | null;
    public image_1: string | null;
    public agentName: string | null;
    

    constructor(page : Page)
        { 
            this.page = page;
            this.prv_downloadButton_Lct = this.page.getByRole('button', { name: 'Download' });
            this.prv_dealNumber_Lct = this.page.locator("//tbody/tr[th[text()='Deal Number']]/td");
            this.prv_propertyType_Lct = this.page.locator("//tbody/tr[th[text()='Property Type']]/td");
            this.prv_transactionType_Lct = this.page.locator("//tbody/tr[th[text()='Transaction Type']]/td");
            this.prv_cashClosing_Lct = this.page.locator("//tbody/tr[th[text()='Cash Closing']]/td");
            this.prv_loanAmount_Lct = this.page.locator("//tbody/tr[th[text()='Loan Amount']]/td");
            this.prv_bookingDate_Lct = this.page.locator("//tbody/tr[th[text()='Booking Date']]/td");
            this.prv_closingDate_Lct = this.page.locator("//tbody/tr[th[text()='Deal Closing Date']]/td");
            this.prv_agentName_Lct = this.page.locator("//tbody/tr[th[text()='Deal Agent Name']]/td");
            this.profileIcon_Lct = page.locator("div[class='profile-icon'] span");
            this.logoutButton_Lct = page.getByText('Logout');
            //this.prv_uploadImage_1_Lct = this.page.getByRole('row', { name: 'Upload Image' }).getByRole('img');
            this.prv_downloadButton_Lct = this.page.getByRole('button', { name: 'Download' })
        };




    async getPreviewData()
        {
            this.dealNumber = await this.prv_dealNumber_Lct.textContent();
            this.propertyType = await this.prv_propertyType_Lct.textContent();
            this.transactionType = await this.prv_transactionType_Lct.textContent();
            this.cashClosing = await this.prv_cashClosing_Lct.textContent();
            this.loadAmount = await this.prv_loanAmount_Lct.textContent();
            this.bookingDate = await this.prv_bookingDate_Lct.textContent();
            this.closingDate = await this.prv_closingDate_Lct.textContent();
            this.agentName = await this.prv_agentName_Lct.textContent();
            //this.image_1 = await this.prv_uploadImage_1_Lct.textContent();
            await this.page.screenshot({path: data.Screenshot_path + 'PreviewPage.jpg',fullPage:true})
        };



    async downloadDeal()
        {
            await this.prv_downloadButton_Lct.click();
        };
    
    async logoutApp(){
        await this.profileIcon_Lct.click();
        await expect(this.logoutButton_Lct).toBeVisible({timeout : 10000});
        await this.logoutButton_Lct.click();
        //await expect(this.page.locator("#login-title")).toBeVisible();


    }


    
    
};