var AngularJSHelper = require('../../page-objects/angular-js/angularjs.helper.js');
var CommonHelper = require('../../page-objects/common/common.helper.js');
var angularJSHelper = new AngularJSHelper();
var commonHelper = new CommonHelper();

describe('AngularJS Website Test: ', function () {

	beforeEach(function () {
		angularJSHelper.get();
	});

	it('As a user, I should be able to add new ToDo item', async () => {
		await angularJSHelper.setToDoText('Test ToDo1');
		await angularJSHelper.addButton();
		expect(await angularJSHelper.getToDoText()).toEqual('Test ToDo1');
		expect(await angularJSHelper.getRemainingItemText()).toEqual('2 of 3 remaining');
		await angularJSHelper.selectToDoItem();
		expect(await angularJSHelper.getRemaining2()).toEqual('1 of 3 remaining');
	});

	it('As a user, I should be able to Archive ToDo items', async () => {
		await angularJSHelper.setToDoText('Test ToDo1');
		await angularJSHelper.addButton();
		expect(await angularJSHelper.getToDoText()).toEqual('Test ToDo1');
		expect(await angularJSHelper.getRemainingItemText()).toEqual('2 of 3 remaining');
		await angularJSHelper.selectToDoItem();
		expect(await angularJSHelper.getRemainingItemText()).toEqual('1 of 3 remaining');
		await angularJSHelper.clickArchiveLink();
		expect(await angularJSHelper.getRemainingItemText()).toEqual('1 of 1 remaining');
	});

	it('As a user, I should be able to add multiple ToDo items', async () => {
		for (toDoItem = 0; toDoItem < 10; toDoItem++) {
			var randomString = 'Test ' + await commonHelper.randomString(8);
			console.log('Random string is: ' + randomString);
			await angularJSHelper.setToDoText(randomString);
			await angularJSHelper.addButton();
		}
		expect(await angularJSHelper.getRemainingItemText()).toEqual('11 of 12 remaining');
	});

	it('As a user, I should be able to getText of last ToDo item and select it', async () => {
		await angularJSHelper.setToDoText('Test ToDo1');
		await angularJSHelper.addButton();
		expect(await angularJSHelper.getLastToDoItemText()).toEqual('Test ToDo1');
		expect(await angularJSHelper.getRemainingItemText()).toEqual('2 of 3 remaining');
		await angularJSHelper.selectLastToDoItem();
		console.log('Selected last ToDo Item');
		expect(await angularJSHelper.getRemainingItemText()).toEqual('1 of 3 remaining');
	});

	xit('This test will be skipped', async () => {
		await angularJSHelper.setToDoText('Test ToDo1');
		await angularJSHelper.addButton();
		expect(await angularJSHelper.getLastToDoItemText()).toEqual('Test ToDo1');
		expect(await angularJSHelper.getRemainingItemText()).toEqual('2 of 3 remaining');
		await angularJSHelper.selectLastToDoItem();
		console.log('Selected last ToDo Item');
		expect(await angularJSHelper.getRemainingItemText()).toEqual('1 of 3 remaining');
	});
});