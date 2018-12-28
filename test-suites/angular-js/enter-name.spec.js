var EnterNamePage = require('../../page-objects/angular-js/angularjs.helper.js');

describe('AngularJS Website Test: ', function () {

	it('As a user, I should be able to enter a Name', function () {
		var enterNamePage = new EnterNamePage();
		enterNamePage.get();
		enterNamePage.setName('QA Loop');
		expect(enterNamePage.getGreeting()).toEqual('Hello QA Loop!');
	});
});