import { Page,test,expect } from "@playwright/test";

import {registerPage} from "../pages/registerPage";


test("Lamda test Website", async ({page})=>{

    const registerPageObject = new registerPage(page);

    await registerPageObject.gotoRegisterUrl();
    await registerPageObject.enterFirstName();
    await registerPageObject.enterLastName();
    await registerPageObject.enterEmail();
    await registerPageObject.enterTelephoneNumber();
    await registerPageObject.enterPassword();
    await registerPageObject.enterConfirmPassword();
    await registerPageObject.checkAgreePolicy();
    await registerPageObject.clickContinue();



})