import test, { expect } from "@playwright/test";

test("Notes Validation",async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://account.box.com/login");
    
    await page.locator("id=login-email").fill('sagar.ahuja@yash.com'); 
    await page.locator("id=login-submit").click();
    await page.locator("id=password-login").fill('Sagar@24');
    await page.locator("id=login-submit-password").click();
    await expect(page).toHaveTitle('All Files | Powered by Box');

    //Click notes, it will open new tab.
    const notesPagePromise = page.waitForEvent('popup')
    await page.locator("//a[@aria-label='Notes']").click();
    const notesPage = await notesPagePromise;

    const notesPageFrame = notesPage.frameLocator("#service_iframe");

    await notesPageFrame.locator("//button[@data-testid='create-note-menu-toggler']").click();
    const noteTitle = "Test_Note_" +Math.floor(Math.random() * 1000);
    //using note template
    await notesPageFrame.getByTestId('create-note-menu-new-note-from-template').click();
    await notesPageFrame.getByTestId("BlankNote").click();
    await notesPageFrame.getByTestId("templates-modal-create-button").click();
    await notesPageFrame.getByRole('textbox', { name: 'Add a Title' }).click();
    await notesPageFrame.getByRole('textbox', { name: 'Add a Title' }).fill(noteTitle);
    await notesPageFrame.getByRole('textbox', { name: 'Add a Title' }).press('Enter');
  


    //using simple note option
    //await notesPageFrame.getByTestId('create-note-menu-new-note').click();
    // await notesPageFrame.locator("//input[@class='title-editor']").click();
    // await notesPageFrame.locator("//input[@class='title-editor']").fill(noteTitle);
    //await notesPageFrame.getByTestId('text-placeholder').click();
    await notesPageFrame.getByTestId("options-menu-trigger").click();
    await notesPageFrame.getByRole('menuitem', { name: 'Delete this note' }).click();
    await notesPageFrame.getByRole('button', { name: 'Clear Notification' }).click();
    
    await notesPage.close();

    await page.locator("//span[@class='avatar-initials ']").click();
    await page.locator("//a[@href='/logout']").click();
    page.close();

});