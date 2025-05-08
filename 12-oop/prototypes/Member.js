// Properties: fullname, username, password, isActive
/*
Functions: 
	freeze(): this method will deactivate the account
	activate(): this method will activate the account
	resetPassword(): this method should reset password if:
		password is not same as previous password (throw proper error)
		it should be 8-16 characters length (throw proper errors)

	updateUsername(): this method updates the username
*/

// Before ES6 - prototype
/*
function Member(fullname, username, password, isActive) {
    this.fullname = fullname;
    this.username = username;
    this.password = password;
    this.isActive = isActive;
}

Member.prototype.freeze = function () {
    this.isActive = false;
}

Member.prototype.activate = function () {
    this.isActive = true;
}

Member.prototype.resetPassword = function (newPassword) {
    if(this.password === newPassword) throw new Error(`The current is already ${newPassword}, try a new one!`);
    else if(newPassword.length < 8 || newPassword.length > 16) throw new Error('The length of the password MUST be 8-16 characters!');

    this.password = newPassword;
}

Member.prototype.updateUsername = function (newUsername) {
    this.username = newUsername;
}
*/

// After ES6 - class

class Member {
    constructor(fullname, username, password, isActive) {
        this.fullname = fullname;
        this.username = username;
        this.password = password;
        this.isActive = isActive;
    }

    freeze() {
        this.isActive = false;
    }
    
    activate() {
        this.isActive = true;
    }
    
    resetPassword(newPassword) {
        if(this.password === newPassword) throw new Error(`The current is already ${newPassword}, try a new one!`);
        else if(newPassword.length < 8 || newPassword.length > 16) throw new Error('The length of the password MUST be 8-16 characters!');
    
        this.password = newPassword;
    }
    
    updateUsername(newUsername) {
        this.username = newUsername;
    }
}

module.exports = Member;

// a class representing LoginPage for Playwright tests
/*
class LoginPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.signinButton = page.locator('#signin');
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
    }

    async enterUsername(username) {
        await this.usernameField.fill(username);
    }

    async enterPassword(password) {
        await this.passwordField.fill(password);
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.signinButton.click();
    }
}

const loginPage = new LoginPage(page);

expect(await loginPage.signinButton.innerText()).toBeVisible();
*/