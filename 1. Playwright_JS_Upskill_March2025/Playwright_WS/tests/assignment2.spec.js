import { test,page, expect } from "@playwright/test";
import data  from "../data.json";

test("Guru 99 Validation", async ({page}) => {
    

    const firstName = page.locator("//input[@name='firstName']");                   //Using Xpath
    const lastName = page.locator("//input[@name='lastName']");                     //Using Xpath
    const address = page.locator("input[name='address1']");                         //Using css
    const city = page.locator("input[name='city']");                                //using css
    const userName = page.locator("#email");
    const random = Math.floor(Math.random()*100);                                   //Using ID
    const password = page.locator("input[name='password']");
    const confirmPassword = page.locator("input[name='confirmPassword']");
    const submitButton = page.locator("//input[@name='submit']");
    const country = page.getByRole('combobox');
    const successMessage = page.locator("//b[contains(text(),'Note: Your user name is')]");                                     //get by role
    
    await page.goto("https://demo.guru99.com/test/newtours/register.php");

    //using Click and Fill function

    await firstName.click();
    await firstName.fill(data.first_Name);
    await lastName.fill(data.last_Name);

    await address.click();
    await address.fill(data.Address_1);
    await city.fill(data.city_location);
    await country.selectOption(data.country)
    const randomuserName = data.user_Name + random
    await userName.click();
    await userName.fill(randomuserName);
    await password.pressSequentially(data.password);
    await confirmPassword.pressSequentially(data.password);
    await submitButton.click();
    console.log(await successMessage.innerText());
    
    await expect (successMessage).toBeVisible();
    await expect(successMessage).toContainText(randomuserName);



    

})