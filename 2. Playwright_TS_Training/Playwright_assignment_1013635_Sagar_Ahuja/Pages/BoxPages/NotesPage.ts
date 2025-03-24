import { expect, FrameLocator, Locator,Page } from "@playwright/test";

export class notesPage
{
    public page : Page;
    readonly notesMenu_lct : Locator;
    waitForEvent: Promise<Page>;
    public notesPageFrame : FrameLocator;

    constructor (page : Page)
    {
        this.page = page;
        this.notesMenu_lct = this.page.locator("//a[@aria-label='Notes']");
        this.waitForEvent = this.page.waitForEvent('popup');
         

    }

    async notesTest(){
    const notesPagePromise = this.waitForEvent;
    await this.notesMenu_lct.click();
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
    await notesPageFrame.getByTestId("options-menu-trigger").click();
    await notesPageFrame.getByRole('menuitem', { name: 'Delete this note' }).click();
    await notesPageFrame.getByRole('button', { name: 'Clear Notification' }).click();
    await notesPage.close();

    }



}