import { chromium,page,test } from "@playwright/test";

test("Validate Scenarion 1", async ({})=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.amazon.in/");
    const title = await page.title();
    console.log(`Page title: ${title}`);

    setTimeout(async () => {
    await browser.close();
  }, 5000);

});

test("Validate scenario 2",async ({page}) => {
    
    const searchBox = page.locator("#twotabsearchtextbox");
    const categoryDropdown = page.locator("#searchDropdownBox");
    const searchButton = page.locator("#nav-search-submit-button");
    const electronicsResult = page.locator('[data-component-type="s-search-result"]');
    const resultItems = page.locator('[data-component-type="s-search-result"]');



    await page.goto("https://www.amazon.in/");
    
    await searchBox.click();
    await searchBox.fill("laptop");
    await categoryDropdown.selectOption("Electronics")
    await searchButton.click();
    
    
    await expect(electronicsResult.first()).toBeVisible();
    
    const itemCount = await resultItems.count(); // Use count() on the correct locator
    console.log(`Number of items in the list: ${itemCount}`);
 
    // Further validation to ensure there are results
    await expect(itemCount).toBeGreaterThan(0);
});
    

