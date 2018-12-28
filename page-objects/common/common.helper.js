var commonHelper = function () {

    var randomstring = require("randomstring");

    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));

    this.randomString = async (stringLength = string) => {
        return await randomstring.generate(stringLength);
    };

};

module.exports = commonHelper