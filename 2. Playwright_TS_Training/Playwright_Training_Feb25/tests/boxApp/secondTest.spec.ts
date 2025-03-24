import test, { expect } from "@playwright/test";

test("My Second Test",async({page})=>{
    await page.goto("https://www.box.com/en-in/home")

    

    console.log("I am learning Playwright UI Automation")


});

 