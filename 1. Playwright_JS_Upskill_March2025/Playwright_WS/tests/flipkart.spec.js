import { test, page } from "@playwright/test"; // Import Playwright
import { log } from "console";
test ("flipkart Image Validation", async ({page}) => {

   
   await page.goto('https://www.flipkart.com');

   // Define locator for slider images within the specified div
   const sliderImages = page.locator("//div[@class='_1yQHx8 _2UnIQ_ _3ak8Rd _2y8Yzt'][2]//img");

   //number of images in the slider
   const imageCount = await sliderImages.count();
   console.log(`Total number of images in the slider: ${imageCount}`);

   
   let imageArray = [];
   for (let i = 0; i < imageCount; i++) {
       const src = await sliderImages.nth(i).getAttribute('src');
       const name = src.split('?')[0];
       console.log(`Image ${i + 1}: ${src}`);
       imageArray.push(name);
       if (imageArray.length==9) {
        src

       }
       
   }

   

   //console.log(imageArray);
   const nameOfImages = [...new Set(imageArray)];
   console.log("Unique Images : ");
   
   console.log(nameOfImages);
   console.log("Unique Image count :"+ nameOfImages.length);
   
   

  
});
