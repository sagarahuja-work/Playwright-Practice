export const navigateTo = async (page, url) => {
    console.log(`Navigating to URL: ${url}`);
    await page.goto(url);
};

export const navigateForward = async (page) => {
    console.log("Navigating forward...");
    await page.goForward();
};

export const navigateBackward = async (page) => {
    console.log("Navigating backward...");
    await page.goBack();
};

export const closePage = async (page) => {
    console.log("Closing the page...");
    await page.close();
};

export const waitForLocator = async (page, selector, timeout = 5000) => {
    console.log(`Waiting for locator: ${selector}`);
    await page.waitForSelector(selector, { timeout });
};