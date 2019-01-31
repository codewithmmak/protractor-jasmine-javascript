![Protractor, Jasmine and JavaScript](./images/protractor-jasmine-javascript.png?raw=true "Protractor, Jasmine and JavaScript")

# Protractor, Jasmine and JavaScript Test Automation Examples
This is sample Test Automation framework designed using Protractor, Jasmine and JavaScript. And in this framework we will see some basic working examples for learning.

## Features
* This automation framework is designed using Protractor and Jasmine.
* JavaScript is used as programming language.
* Reporting is implemented using protractor-beautiful-reporter npm module. This generates the report in html and json. Also it captures the screenshots.

## Framework Structure
```
├───images                          # This folder contains sample report image
├───page-objects                    # This folder contains page object, page helper and page contants
│   ├───common
│   └───pages
│       ├───common
│       └───super-calculator
├───temp                            # This folder contains JS file which are generated after compiling TypeScript files
├───test-results                    # This folder contains test result (includes html report and screenshots)
└───test-suites                     # This folder contains spec/test files
```

## To Get Started

### Pre-requisites
* Download and install Chrome or Firefox browser.
* Download and install Node.js:
  * [Install Node.JS](https://qaloop.tk/blog/install-node-js/ "Install Node.JS")
* Optional - Download and install any Text Editor like Visual Code/Sublime/Brackets
  * [Install Visual Studio Code](https://qaloop.tk/blog/install-visual-studio-code/ "Install Visual Studio Code")

### Setup Scripts 
* Clone the repository into a folder
* Install Protractor: `npm install -g protractor`
* Update necessary binaries of webdriver-manager: `webdriver-manager update` or `npm install -g webdriver-manager`
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

### How to write Test
* Add new spec under test-suite folder
* Name the file as <testname>.spec.ts (e.g. super-calculator.spec.ts)
* Create folder under page-objects/pages as <page-name> (e.g. super-calculator)
* Under page folder create constant, helper and page object file.
    * <page-name>.constants.ts (e.g. super-calculator.constants.ts)
    * <page-name>.helper.ts (e.g. super-calculator.helper.ts)
    * <page-name>.po.ts (e.g. super-calculator.po.ts)

### How to Run Test
* Run complete Test Suite: `npm test`

### How to Run Test for single Module
* Run Test Module: `protractor config\SignUpUserManagement.js`

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

### Sample Test Results
![Protractor, Jasmine and JavaScript Test Result](./images/test-results.png?raw=true "Protractor, Jasmine and JavaScript Test Result")


## [Step by Step installation instruction for Beginners](https://qaloop.tk/blog/test-automation-using-protractor-jasmine-and-javascript/ "Step by Step installation instruction for Beginners")


## Visit my [Blog](https://qaloop.tk/blog/ "Blog")
