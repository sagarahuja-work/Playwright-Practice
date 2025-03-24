import test, { expect } from "@playwright/test";
import { boxLoginPage } from "../../Pages/BoxPages/LoginPage";
import { notesPage } from "../../Pages/BoxPages/NotesPage";


test("Notes Validation",async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const boxLoginPageObject = new boxLoginPage(page);
    const notesTestObject = new notesPage(page);

    await page.goto("https://account.box.com/login");
    await boxLoginPageObject.loginToBox();
    //Click notes, it will open new tab.
    await notesTestObject.notesTest();
    
    await page.locator("//span[@class='avatar-initials ']").click();
    await page.locator("//a[@href='/logout']").click();
    page.close();

});