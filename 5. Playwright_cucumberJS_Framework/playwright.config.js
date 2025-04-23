// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
//export default defineConfig

const config = ({
  testDir: './tests',
  timeout : 40 * 1000,
  expect : {
    timeout : 40*1000
  },

  reporter : 'allure-cucumberjs/reporter',


  use: {

    browserName : 'chromium',
    headless : false,
    screenshot : 'on',      //to take screenshot on every step
    //trace : 'on',           //to trace/capture logs on every step
    trace : 'on',  //to trace/capture log only on failure -- retain-on-failure

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  }

  
});

export default config;
//module.exports = config    //export this config varibale so that it will available all over the project

