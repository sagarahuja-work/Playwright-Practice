import { After, AfterStep, Before, Status } from "@cucumber/cucumber";
import { chromium , expect} from '@playwright/test'
import poManager from '../../pageobjects/POManager.js';
import { navigateTo, closePage, navigateForward, navigateBackward, waitForLocator } from '../../utils/helpers.js';

const defaultBrowser = 'chromium';

Before(async function () {
    
  let browser;
  
  // Use switch-case to select the browser based on defaultBrowser
  switch (defaultBrowser) {
    case 'chromium':
      browser = await chromium.launch({ headless: false });
      break;
    case 'firefox':
      browser = await firefox.launch({ headless: false });
      break;
    case 'webkit':
      browser = await webkit.launch({ headless: false });
      break;
    default:
      throw new Error(`Unsupported browser: ${defaultBrowser}. Valid options are: chromium, firefox, webkit.`);
  }
  
  // Create a new browser context and page
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Attach them to the Cucumber World for use in step definitions.
  this.browser = browser;
  this.context = context;
  this.page = page;

  this.POMobject =new poManager(this.page)
});

        // this.browser = await chromium.launch({ headless: false });
        // this.context = await this.browser.newContext();
        // this.page = await this.context.newPage();
        
        
       


After({tags: "@Regression  or @Validation"},async function () {
    console.log("I am last to execute...");
    await closePage(this.page)
    

});


// AfterStep(async function ({result}) {
    
//     if (result.status === Status.FAILED) {

//         await this.page.screenshot({path : 'screenshots/screenshotCucumber.png'});
        
//     }

// })

AfterStep(async function ({ result, pickle }) {
    const stepName = pickle.name.replace(/[\s\/\\:*?"<>|]/g, '_'); // Replace invalid characters for filenames
   

    // Capture and attach screenshot for every step
    const screenshotBuffer = await this.page.screenshot();
    this.attach(screenshotBuffer, 'image/png');
    console.log(`Screenshot saved for step: ${stepName}`);

    // Additionally, handle screenshots for failed steps
    if (result.status === Status.FAILED) {
        const failedScreenshotPath = `screenshots/FAILED-${stepName}.png`;
        await this.page.screenshot({ path: failedScreenshotPath });
        console.log(`Failed step screenshot saved: ${failedScreenshotPath}`);
    }

    
});

