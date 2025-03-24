import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.box.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  expect.soft(page.url(), "Page got redirected").toBe("https://account.box.com/login")  //assert page URL

  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('sagar.ahuja@yash.com');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('button', { name: 'Next' }).press('Enter');

  //await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Sagar@24');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.locator("//input[@data-target-id='SearchInput-searchFilesAndFolders']").click();
  // const pageTitle = await page.title();
  // console.log(pageTitle);
  
expect.soft(await page.title(), "Incorrect page title").toBe("All Files | Powered by Box");  //assert page title

  await page.getByTestId('new-item-menu-button').click();
  await page.getByRole('menuitem', { name: 'Create a new Folder' }).click();

  const parentfolderName = "TestFolder_" +Math.floor(Math.random() * 1000);
  await page.getByRole('textbox', { name: 'Folder Name' }).fill(parentfolderName);
 
  await page.getByLabel('PermissionEditorViewer').selectOption('Viewer');
  await page.getByRole('combobox', { name: 'Invite Additional People' }).click();
  await page.getByRole('combobox', { name: 'Invite Additional People' }).fill('sagar@test.com');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await expect.soft(page.locator("div.notification.info.wrap"), "Notification not visible").toBeVisible();  //assert notofication visibility


  // assert notification text
  await expect.soft(page.locator("div.notification.info.wrap"), "Wrong text in notification").toHaveText("\""+parentfolderName+"\" was created successfully.");
  await page.locator("div.TableRow-focusBorder", {has : page.locator("//a[text()='"+parentfolderName+"']")} ).hover();
  await page.locator("(//input[@class='mousetrap'])[1]").click();

await page.getByTestId('CollectionsActionItem').getByRole('button').click();

expect.soft(page.getByLabel('', { exact: true }).getByText('Favorites'), "Adding to fav. not enable").toBeEnabled();  //assert enablity of locator
await page.getByLabel('', { exact: true }).getByText('Favorites').click();

await page.getByTestId('collection-navitem-link').click();

  
});
