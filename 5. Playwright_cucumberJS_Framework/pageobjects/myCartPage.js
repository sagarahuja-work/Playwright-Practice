import { expect } from '@playwright/test';

class myCartPage{

    constructor(page){

        this.page = page;
        this.cartList = this.page.locator("//div//li");
        this.checkoutButton = this.page.locator("text=Checkout");
        

    }

    
    async vaidateCart(desiredProductName){

        await this.cartList.first().waitFor({state : "visible"});
            const bool = await this.page.locator("h3:has-text('"+desiredProductName+"')").isVisible();
            expect(bool).toBeTruthy();
            //assert(bool).toBeTruthy();


    }

    async cartCheckout() {
        await this.checkoutButton.click();
        
    }


}

export default myCartPage;