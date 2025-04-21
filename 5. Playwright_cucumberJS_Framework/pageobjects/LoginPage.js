import { ecom_client_URL } from "../utils/constants.js";
class loginPage{
    
        
    constructor(page)
    {   
        this.page = page;           //assign intance variable to local variable of the class
        this.userName = page.locator(`#userEmail`);
        this.password = page.locator(`#userPassword`);
        this.signInButton = page.locator(`#login`);

        //find by object repository bin --- read about this
   
    }
        
    async goToLoginPage()
    {
        await this.page.goto(ecom_client_URL);
        

    }

    async ValidLogin(userName,password)
    {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');
    }

}

export default loginPage;