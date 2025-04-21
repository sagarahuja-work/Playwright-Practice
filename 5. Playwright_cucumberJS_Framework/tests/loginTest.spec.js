import { test, expect } from '@playwright/test';
import LoginPage1 from "../pageobjects.js/LoginPage";

test("Test Login with Page objects", async({page})=> {

    const userName = "rahulshettyacademy"
    const password = "learning"

    let loginPageObj1 = new LoginPage1(page)
    loginPageObj1.goToLoginPage();
    loginPageObj1.ValidLogin(userName,password);
    console.log("Login Successful");
    

});