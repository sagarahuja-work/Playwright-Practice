Folder Structure
1. Features
Contains .feature files written in Gherkin syntax.

Defines high-level scenarios for BDD (Behavior Driven Development).

Example path:

/features
  ├── login.feature
  ├── checkout.feature
2. Step Definitions
Includes implementation of steps defined in .feature files.

Maps Gherkin steps to JavaScript functions using Cucumber JS.

Example path:

/steps
  ├── loginSteps.js
  ├── checkoutSteps.js
3. Reports
Holds test execution results and generated HTML reports.

Uses tools like multiple-cucumber-html-reporter for visual representation of results.

Example path:

/reports
  ├── cucumber.json
  ├── html/
4. Utilities
Constants: Defines reusable constant values for the framework, such as URLs, timeouts, selectors, etc.

Helpers: Includes utility functions for common tasks, such as API calls, formatting data, or other reusable logic.

Example path:

/utils
  ├── constants.js
  ├── helpers.js

## Dependencies and why its used
 
This project requires the following dependencies:  
- **[Playwright](https://playwright.dev/)**: For browser automation.  
- **[Cucumber.js](https://cucumber.io/)**: For behavior-driven development (BDD) testing framework.
- **[allure-cucumberjs": "^3.2.1",]: For allure report generation  
- **[cucumber-html-reporter]: For Genrateing Graphical Report
1.Install Node.js: Make sure you have Node.js(providing environment to our playwright code)
->node -v  ,npm -v
2.Create a New Project Directory: Open your terminal and create a new directory for your project.
->mkdir playwright-cucumber-project  
->cd playwright-cucumber-project  
3.Install Playwright(To support all Playwright-based code, install Playwright)
->npm install playwright@latest
4 Install Cucumber (To integrate Cucumber for behavior-driven development, run:)
->npm install playwright @cucumber/cucumber  
5.Install Dotenv (To manage environment variables conveniently, install dotenv:)
->npm install Dotenv
6.Install cucumber-html-reporter(For generating graphical reports of your test results, install:)
->npm i cucumber-html-reporter -D
7.Install csv parser (To parse CSV files for data-driven testing, install:)
->npm i csv-parser
 
***************📁Step by step process for creating playwright cucumber project using javascript📁**********
**📁Create features folder in the tests directory:
-This folder will contain all your feature files.
 
**📁Create step_definitions folder in the tests directory:
--This folder will include your step definitions.
--Optionally, add a hooks.js file to manage all hooks operations within the same folder.
 
**📁Create pages folder in the tests directory:
-This folder will contain your page object model (POM) files for better organization of your selectors and methods.
 
**📁Create cucumber.json file:
-This configuration file will maintain all Cucumber settings.
 
**Check the default package.json file:
--This file is created automatically when you initialize your Node.js project. It tracks all project dependencies.
 
**📁Create config folder at the root level:
-Use this folder to manage your environment files.
 
**📁Create data folder:
-This folder will maintain any data files used for fetching test data.
 
**📁Create reports folder:
-Use this folder to store various types of reports, including HTML, JSON, XML, and screenshots of tests.
 
**📁Create screenshots folder:
-This folder will store screenshots taken during test execution, helping you review passed and failed scenarios.
 
**📁Create utils folder at the root level:
-This folder will contain helper functions and constant definitions used throughout your tests.
 
**📁Create reporter.js file at the root level:
-This file wil provide the more info how our generated report will look.
 