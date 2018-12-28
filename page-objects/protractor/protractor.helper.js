var protractorHelper = function () {

    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));

    this.get = function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    };

    this.setName = function (name) {
        nameInput.sendKeys(name);
    };


};

module.exports = protractorHelper