import {Page,expect,Locator} from "@playwright/test";
import data from "../../testdata.json";

export class UnicornDealDetailsPage {
    
    public page : Page;
    //public date1 : Date;
    readonly propertyType_Lct : any;
    readonly pt_cos_Lct : Locator;
    readonly pt_rf_Lct : Locator;
    readonly pt_rp_Lct  : Locator;
    readonly pt_rhv_Lct : Locator;
    readonly pt_cl_Lct : Locator;
    readonly transactionType_Lct : Locator;
    readonly tt_purchase_Lct : Locator;
    readonly tt_sale_Lct : Locator;
    readonly tt_rent_Lct : Locator;
    readonly paymentTypeFinance_Lct : Locator;
    readonly paymentTypeCash_Lct : Locator;
    readonly bookingDate_Lct : Locator;
    readonly closingDate_Lct : Locator;
    readonly agentName_Lct : Locator;
    readonly agencyOwnerName_Lct : Locator;
    readonly agentMobileNumber_Lct : Locator;
    readonly agentMobileNo_arrow_Lct : Locator;
    readonly uploadImage_Lct : Locator;
    readonly dealSubmit_Lct : Locator;
    readonly confirmMessage_Lct : Locator;
    readonly previewButton_Lct : Locator;
    public propertyType : any;
    //public transactionType: Promise<string | null>;


    constructor(page : Page)
    {   

        this.page = page;
       
        this.propertyType_Lct = page.locator("#disclosureType");
        this.pt_rf_Lct = page.getByRole('option', { name: 'Resendential Flat'});
        this.pt_rp_Lct = page.getByRole('option', { name: 'Resendential Plot'});
        this.pt_rhv_Lct = page.getByRole('option', { name: 'Resendential House/Villa'});
        this.pt_cl_Lct = page.getByRole('option', { name: 'Commercial Land'});
        this.pt_cos_Lct = page.getByRole('option', { name: 'Commercial Office Space'});
        this.transactionType_Lct = page.locator("//ng-select[@name='transactionType']//span[@class='ng-arrow-wrapper']");
        this.tt_purchase_Lct = page.getByRole('option', {name : 'Purchase'});
        this.tt_sale_Lct = page.getByRole('option', {name : 'Sale'});
        this.tt_rent_Lct = page.getByRole('option', {name : 'Rent'});
        this.paymentTypeFinance_Lct = page.locator("//label[@for='financeClosing']");
        this.paymentTypeCash_Lct = page.locator("//label[@for='cashClosing']");
        this.bookingDate_Lct = page.locator('#closingDate');
        this.closingDate_Lct = page.locator('#disbursementDate');
        this.agentName_Lct = page.locator('#dealAgentName');
        this.agencyOwnerName_Lct = page.locator('#agencyOwnerName');
        this.agentMobileNumber_Lct = page.locator('#mobNumOfDealAgent');
        this.uploadImage_Lct = page.locator("//label[@for='file-input']");
        this.dealSubmit_Lct = page.locator("//input[@type='submit']");
        this.confirmMessage_Lct = page.locator(".modal-content");
        this.previewButton_Lct = page.locator("//button[@type='button']");

    };

    async fillDealDeatils ()
    {

        await expect(this.propertyType_Lct).toBeVisible();
        await this.propertyType_Lct.click();

        if (data.Property_Type == "Resendential Flat") {
            await expect(this.pt_rf_Lct).toBeVisible({timeout : 1000000});
            await this.pt_rf_Lct.click({timeout : 100000});
            
        }

        else if (data.Property_Type == "Resendential Plot"){
            await expect(this.pt_rp_Lct).toBeVisible({timeout : 1000000});
            await this.pt_rp_Lct.click({timeout : 100000});

        }

        else if (data.Property_Type == "Resendential House/Villa"){
            await expect(this.pt_rhv_Lct).toBeVisible({timeout : 1000000});
            await this.pt_rhv_Lct.click({timeout : 100000});

        }

        else if (data.Property_Type == "Commercial Land"){
            await expect(this.pt_cl_Lct).toBeVisible({timeout : 1000000});
            await this.pt_cl_Lct.click({timeout : 100000});

        }
        
        else if (data.Property_Type == "Commercial Office Space"){
            await expect(this.pt_cos_Lct).toBeVisible({timeout : 1000000});
            await this.pt_cos_Lct.click({timeout : 100000});

        }
        
        
        

        await this.propertyType_Lct.press('Tab');
        await expect(this.transactionType_Lct).toBeVisible();
        await this.transactionType_Lct.click();

        if (data.Transaction_Type == "Sale") {
            await expect(this.tt_sale_Lct).toBeVisible({timeout : 1000000});
            await this.tt_sale_Lct.click({timeout : 100000});
            
        }
        else if (data.Transaction_Type == "Purchase") {
            await expect(this.tt_purchase_Lct).toBeVisible({timeout : 1000000});
            await this.tt_purchase_Lct.click({timeout : 100000});
            
        }
        else if (data.Transaction_Type == "Rent") {
            await expect(this.tt_rent_Lct).toBeVisible({timeout : 1000000});
            await this.tt_rent_Lct.click({timeout : 100000});
            
        }
        
        
        await this.transactionType_Lct.press('Tab');
        
        await this.paymentTypeFinance_Lct.click();
        await this.bookingDate_Lct.click();
        await this.bookingDate_Lct.fill(data.booking_date);
        await this.closingDate_Lct.click();
        await this.closingDate_Lct.fill(data.Closing_date);



        await this.page.locator('#loanAmount').click();
        await this.page.locator('#loanAmount').fill(data.Loan_Amount);
    }

    async fillContactDetails()
    {
        await this.agentName_Lct.click();
        await this.agentName_Lct.fill(data.Agent_Name);
        await this.agencyOwnerName_Lct.click();
        await this.agencyOwnerName_Lct.fill(data.Agency_Owner_Name);
        await this.agentMobileNumber_Lct.click();
        await this.agentMobileNumber_Lct.fill(data.Agent_Mobile_Number);

    }

    async uploadPropertyImages()
    {
        await this.uploadImage_Lct.setInputFiles([data.Image_1, data.Image_2]);
    }

    async submitDeal() : Promise<void>
    {
        await this.dealSubmit_Lct.click();
        await expect(this.confirmMessage_Lct).toBeVisible();
        await this.previewButton_Lct.click();
        
    }

    async convertDate(date1 : string) : Promise<string>
           {
           const orignalDate = new Date(date1);
           const formattedDate = orignalDate.toLocaleDateString ('en-US',{
            year: 'numeric',
            month: 'short',
            day: 'numeric'
            })
            return formattedDate;
            }
}
