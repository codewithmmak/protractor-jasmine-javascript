![Protractor, Jasmine and JavaScript](./images/protractor-jasmine-javascript.png?raw=true "Protractor, Jasmine and JavaScript")

# Protractor Automation Framework
This Automation Framework is designed using Protractor, Jasmine and JavaScript

## Framework Structure
```
├───.circleci                       # This contains CircleCI config.yml file
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
  * [Install Node.JS](https://qaloop.tk/blog/2018/11/23/install-node-js/ "Install Node.JS")
* Optional - Download and install any Text Editor like Visual Code/Sublime/Brackets
  * [Install Visual Studio Code](https://qaloop.tk/blog/2018/11/23/install-visual-studio-code/ "Install Visual Studio Code")

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
<p align="center">
<img src= "./images/test-results.png" width=800 height=600 alt="protractor-jasmine-javascript.png"/>
</p>

![Protractor, Jasmine and JavaScript](./images/test-results.png?raw=true "Protractor, Jasmine and JavaScript")


## [Step by Step installation instruction for Beginners](https://qaloop.tk/blog/2018/12/28/test-automation-using-protractor-jasmine-and-javascript/ "Step by Step installation instruction for Beginners")


## Visit my [Blog](https://qaloop.tk/blog/ "Blog")
