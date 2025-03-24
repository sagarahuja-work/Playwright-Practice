import{test,expect,Page} from "@playwright/test";
import { UnicornLoginPage } from "../../Pages/UnicornPages/LoginPage";
import {UnicornWelcomePage} from "../../Pages/UnicornPages/WelcomePage";
import { unicornPreviewPage } from "../../Pages/UnicornPages/PreviewPage";
import data from "../../testdata.json";
import { UnicornDealDetailsPage } from "../../Pages/UnicornPages/DealDetailsPage";

test.describe("Unicorn End to End Scenarios", ()=>{

test("Unicorn Test", {tag: "@regression"}, async ({page})=>{

        const UnicornLoginPageObject = new UnicornLoginPage(page);
        const UnicornWelcomePageObject = new UnicornWelcomePage(page);
        const UnicornDealDetailsPageObject = new UnicornDealDetailsPage(page);
        const unicornPreviewPageObject = new unicornPreviewPage(page);
        
        


        await test.step("Login Validation", async ()=>
            {
            
            await UnicornLoginPageObject.openUnicorn(data.LoginPage_url);
            await UnicornLoginPageObject.loginUnicorn(data.username,data.password);
            await page.screenshot({path: data.Screenshot_path + 'LoginPage.jpg',fullPage:true})

                    
            });
    
        await test.step("Verify Welcome page & Logout Button", async ()=>{

            await UnicornWelcomePageObject.verifyWelcomePage();
            console.log("Welcome page verified");
            await UnicornWelcomePageObject.verifyLogoutButton();
            
            

        });
        
        await test.step("Create New Deal", async ()=>{
            await UnicornWelcomePageObject.createNewDeal(data.Deal_Type,data.payment_Type);
            await page.screenshot({path: data.Screenshot_path + 'WelcomePage.jpg',fullPage:true})

        });

        await test.step("Enter Deal Details", async () => {
            await UnicornDealDetailsPageObject.fillDealDeatils();
            await UnicornDealDetailsPageObject.fillContactDetails();
            
            
        });

        await test.step("Upload Property Photos", async () => {
           await UnicornDealDetailsPageObject.uploadPropertyImages();
           await page.screenshot({path: data.Screenshot_path + 'DealDetailsPage.jpg',fullPage:true})
        
        });
      
        await test.step("Submit Deal Form", async()=> {
            await UnicornDealDetailsPageObject.submitDeal();
        

        });

        await test.step("Verify Data on Preview Page", async () => {
            await unicornPreviewPageObject.getPreviewData();     
            expect.soft(unicornPreviewPageObject.dealNumber, "Deal Number assertion failed").toBe(UnicornWelcomePageObject.dealNumber);
            expect.soft(unicornPreviewPageObject.propertyType, "Property Type assersion failed").toBe(data.Property_Type);
            expect.soft(unicornPreviewPageObject.transactionType, "Transaction type assertion failed").toBe(data.Transaction_Type);
            expect.soft(unicornPreviewPageObject.cashClosing, "Payment Type assertion failed").toBe(data.payment_Type);
            expect.soft(unicornPreviewPageObject.bookingDate, "Booking Date assertion failed").toBe(UnicornDealDetailsPageObject.convertDate(data.booking_date));
            expect.soft(unicornPreviewPageObject.closingDate, "Closing Date assertion failed").toBe(UnicornDealDetailsPageObject.convertDate(data.Closing_date));
            expect.soft(unicornPreviewPageObject.agentName, "Agent Name assertion failed").toBe(data.Agent_Name);
        });

        await test.step("Logout Application", async () => {

            await unicornPreviewPageObject.logoutApp();
            await page.close();
        });



});





});
