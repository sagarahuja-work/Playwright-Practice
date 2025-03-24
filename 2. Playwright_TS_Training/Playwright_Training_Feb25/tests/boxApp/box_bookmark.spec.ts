import test, { expect } from "@playwright/test";

test("Box - bookmark testcase",async({page})=>{

    await page.goto("https://account.box.com/login");
    
    await page.locator("id=login-email").fill('sagar.ahuja@yash.com');
    await expect(page).toHaveScreenshot();  
    await page.locator("id=login-submit").click();

    await page.locator("id=password-login").fill('Sagar@24');

    await page.locator("id=login-submit-password").click();
    await expect(page).toHaveTitle('All Files | Powered by Box');
    await page.screenshot({ path: 'after_login.png', fullPage : true });             //full page screenshot

    await page.locator("button[data-testid='new-item-menu-button']").click();
    await page.locator("li[data-target-id='MenuItem-newbookmark']").click();
    //await page.getByText('Bookmark', {exact : true}).click();
    const bookmarkName = "test_Bookmark" +Math.floor(Math.random() * 1000);
    await page.locator("input[data-resin-target='urlinput']").fill(bookmarkName);
    await page.locator("input[data-resin-target='nameinput']").fill(bookmarkName);
    await page.locator("button[type=submit]", {hasText : 'create'}).click();
    //await page.locator("div.notification.info.wrap").hover();
    expect(page.locator("div.notification.info.wrap")).toBeVisible();
    await page.locator("div.notification.info.wrap").screenshot({path : 'notification.png'});   //element screenshot

    await expect(page.locator("div.notification.info.wrap")).toHaveText("\""+bookmarkName+"\" was created successfully.");

    console.log(`${bookmarkName} was created successfully`);

    await page.locator("div.TableRow-focusBorder", {has : page.locator("//a[text()='"+bookmarkName+"']")} ).hover();

    await page.locator("(//input[@class='mousetrap'])[1]").click();
    await page.locator("button[data-resin-target='trash']").click();
    await expect(page).toHaveScreenshot();                                                  //compare screenshot
    await page.locator("button[data-resin-target='primarybutton']").click();
    console.log(`${bookmarkName} was deleted successfully`);

    await page.close();

    



});