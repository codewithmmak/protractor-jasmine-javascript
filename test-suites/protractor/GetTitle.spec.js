describe('Protractor Demo App', function () {
	it('Should have a title', function () {
		browser.get('http://juliemr.github.io/protractor-demo/')
		expect(browser.getTitle()).toEqual('Super Calculator');
	});
});