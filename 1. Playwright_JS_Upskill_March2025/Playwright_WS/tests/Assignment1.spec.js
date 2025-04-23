import { test, page, expect } from "@playwright/test";

test("Validate Royal Enfield Site",async ({page})=>{

    await page.goto("https://www.royalenfield.com/in/en/home/");
    await page.waitForLoadState('networkidle');
    await page.locator("#customGDPR").click();
    expect(await page.title()).toBe("Royal Enfield India | Roadster, Adventure, Cruiser Motorcycles India");
    console.log(await page.title());
    //await page.waitForLoadState('domcontentloaded')
    await page.waitForSelector("header", {state : 'visible'})
    const headerContent = await page.locator("header").innerText();
    console.log("header :" +headerContent);
    expect(headerContent).toContain("Motorcycles");
    
    
});