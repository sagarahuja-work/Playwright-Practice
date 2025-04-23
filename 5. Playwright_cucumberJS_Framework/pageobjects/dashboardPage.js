class dashboardPage{

    constructor(page){
        this.page = page;
         this.products = page.locator(".card-body");
         this.productsText = page.locator(".card-body b");
         this.cart = page.locator("[routerlink*='cart']")
    }

    async searchProduct(desiredProductName){
        const titles = await this.productsText.allTextContents();
            console.log(titles);
            const count = await this.products.count();
            console.log(count);
        
            for (let index = 0; index < count; index++) {
                
                const fetchProductName = await this.products.nth(index).locator('b').textContent()
                //await expect(await page.getByRole('button', { textContent: 'Add To Cart' }).nth(index)).toBeVisible();
                console.log(fetchProductName)
                if (fetchProductName === desiredProductName) {
                    //add to cart
                    await this.products.nth(index).locator("text='Add To Cart'").click();
                    break;
                               
                }
                
            }



    }

    async navigateToCart() {
        
        await this.cart.click();
        

    }



}

export default dashboardPage;