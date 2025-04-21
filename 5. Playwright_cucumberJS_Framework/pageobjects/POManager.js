
import loginPage from './LoginPage.js';
import dashboardPage from './dashboardPage.js';
import myCartPage  from './myCartPage.js';


class poManager {

    constructor(page) {

        this.page = page;
        this.loginPageObject = new loginPage(this.page);
        this.dashboardPageObject = new dashboardPage(this.page);
        this.myCartPageObject = new myCartPage(this.page)
        
    }

    getLoginPage(){

        return this.loginPageObject;
    }

    getDashboaredPage(){

        return this.dashboardPageObject;
    }

    getMyCartPage(){

        return this.myCartPageObject;
    }
}

export default poManager;

