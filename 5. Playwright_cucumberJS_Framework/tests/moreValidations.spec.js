import { test, page, expect } from "@playwright/test";

test.only("Popup Validation", async ({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await page.goto("https://www.google.com/");
await page.goBack();
await page.goForward();                            //navigate in browser
await page.goBack();

await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
await page.pause();
page.on('dialog', dialog => dialog.accept());
await page.locator("#confirmbtn").click();




})