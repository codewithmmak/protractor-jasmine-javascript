var angularjsHelper = function () {

    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));

    var enterToDoText = element(by.model('todoList.todoText'));
    var addButton = element(by.xpath('//input[@type="submit"]'));
    var toDo = element(by.xpath('html/body/div[2]/div[3]/div[2]/div[2]/div/ul/li[3]/label/span'));
    var remaining = element(by.xpath('html/body/div[2]/div[3]/div[2]/div[2]/div/span'));
    var selectToDoItem = element(by.xpath('html/body/div[2]/div[3]/div[2]/div[2]/div/ul/li[3]/label/input'));
    var remaining2 = element(by.xpath('html/body/div[2]/div[3]/div[2]/div[2]/div/span'));
    var archiveLink = element(by.linkText('archive'));
    var lastToDoItem = element.all(by.css('.checkbox span')).last();
    var selectLastToDoItem = element.all(by.css('.checkbox input')).last();

    this.get = async () => {
        await browser.get('https://angularjs.org');
        console.log('User is navigated to Angular JS site');
    };

    this.setName = async (name) => {
        await nameInput.sendKeys(name);
        console.log('Set Name Text');
    };

    this.getGreeting = async () => {
        return await greeting.getText();
        console.log('Got Greeting Text');
    };

    this.setToDoText = async (toDoText) => {
        await enterToDoText.sendKeys(toDoText);
        console.log('Set ToDo Text');
    };

    this.addButton = async () => {
        await addButton.click();
        console.log('Clicked Add button');
    };

    this.getToDoText = async () => {
        return await toDo.getText();
        console.log('Got ToDo Text');
    };

    this.getRemainingItemText = async () => {
        return await remaining.getText();
        console.log('Got remaining item Text');
    };

    this.selectToDoItem = async () => {
        await selectToDoItem.click();
        console.log('Clicked on To Do item');
    };

    this.getRemaining2 = async () => {
        return await remaining2.getText();
    };

    this.clickArchiveLink = async () => {
        await archiveLink.click();
        console.log('Clicked on Archive link');
    };

    this.getLastToDoItemText = async () => {
        var last = await lastToDoItem.getText();
        console.log('Last ToDo Item is: ' + last);
        return last;
    };

    this.selectLastToDoItem = async () => {
        return await selectLastToDoItem.click();
        console.log('Selected last ToDo item');
    };

};

module.exports = angularjsHelper