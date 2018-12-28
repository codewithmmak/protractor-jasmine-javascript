describe('Protractor Demo App', function () {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  beforeEach(function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('Should have a title', function () {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('Should add one and two', function () {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  });

  it('Should add four and six', function () {
    firstNumber.sendKeys(4);
    secondNumber.sendKeys(6);

    goButton.click();

    expect(latestResult.getText()).toEqual('10');
  });
});