import { Browser, chromium, firefox, Page, webkit } from '@playwright/test';

export class BrowserControls{
 private str:string = "sunil";
 public id:number = 10;
 private obj:any;
 private browser:Browser;
 private val:string = "ravi";

   constructor(){
    //current class current object
    //console.log("aaaaaaaaaa"+this.id);
    this.id = 12;
    this.str = "ravi";

   } 

    async launchBrowser(brName : string):Promise<Browser>{
        try{
            const x=34;
            if (brName == "chromium") {
                console.log("test will run in browser chromium...");
                this.browser = await chromium.launch({
                    headless: false,
                });
                }
        
            else if (brName == "firefox") {
                console.log("test will run in browser firefox...");
                this.browser = await firefox.launch({
                    headless: false,
                });
                }
            else if (brName == "webkit") {
                console.log("test will run in browser webkit...");
                this.browser = await webkit.launch({
                    headless: false,
                });
                }
        return this.browser;
        }
        catch(ex){
            throw ex;
        }    
    }

    async openPageTab():Promise<Page>{
        try{
            const context = await this.browser.newContext();
            const page = await context.newPage();
        return page;
        }
        catch(ex){

            throw new Error('Page tab not opened');
        }
    }

    async getStr():Promise<String>{
        return this.str;
    }

}

