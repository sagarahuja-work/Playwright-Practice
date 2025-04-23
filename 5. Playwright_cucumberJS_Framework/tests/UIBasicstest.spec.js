const {test, expect} = require ('@playwright/test');
const { log } = require('console');

//basic structure of the test function which will be testcase:->

// in playwrite we want to run the test step by step that's why we need the function to by Asynchronous (async)
// if a function is async, then we need to use await at every step to wait for it to complete

//in javascript if a function has no name (i.e. its a annnomous function) then we use => arrow function

// in playwrite we have predefine fixture, i.e browser, and to use it we need to pass it in function arguments as {browser}
//fixtures are like a global varibales which are available across your playwright project


//from browser we need to create new context, context is like a new instance of the browser.
//we can set predefined cookies and properties for the newly created context/instance of a browser
//browser.newContext

test('Browser context Playwright test name', async ({browser}) => {

    const context = await browser.newContext();           //create new context/instance
    const page = await context.newPage();                              //create new page

    await page.goto('https://rahulshettyacademy.com/');

});

// if we dont have anything to inject in new browser's context then we can directly use page fixture.
// page fixture will take bydefault browser and context 

test ('Test login validation for incorrect credentials', async ({page}) => {

    // const context = await browser.newContext();           //create new context/instance
    // const page = await context.newPage();                              //create new page
    const userName = page.locator('input#username');
    const password = page.locator("[type='password']");
    const signInButton = page.locator("[value='Sign In']");

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    //get the title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    
    await userName.fill('rahulshettyacademy1');
    await password.fill("learning");
    await page.locator('input#terms').check();
    await signInButton.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    await userName.fill("");                  // It will clean the text in the field.
    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await signInButton.click();

    //how to handle locators which match multiple elements
    console.log(await page.locator(".card-body a").first().textContent());   //it will take text of first element i.e. 0th index
    console.log(await page.locator(".card-body a").nth(0).textContent());    //it will also take text of first element i.e. 0th index
    console.log(await page.locator(".card-body a").nth(1).textContent());    //it will take text of element at 1th index
    console.log(await page.locator(".card-body a").last().textContent());    //it will take text of last element.
    
    



});

test ("Child Windows Handling", async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documemtLink = page.locator("[href*='documents-request']");
    
   const [Page2] = await Promise.all(   
    [ context.waitForEvent('page'),  // listen(wait) for any new page to open
    documemtLink.click(), //this will open new page -- new page is openeds
    ]);

    //await newPage2.locator("//div[@class='nav-outer clearfix']//a[normalize-space()='Home']").click();
    const text = await Page2.locator(".red").textContent();
    console.log(text);
    const arrayText = text.split("@");
    console.log(arrayText);
    
    const domainName = arrayText[1].split(".")[0];
    console.log("username : "+domainName);

    //switching back to new page
    await page.locator('input#username').fill(domainName);
    await page.locator("[type='password']").fill("learning");
    await page.locator('input#terms').check();
    await page.locator("[value='Sign In']").click();


    
});


