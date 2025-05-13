// const users  = require('./utils/Users');


// console.log(users.tg_frontend_user);
// console.log(users.tg_backend_user);

// const { username, password } = users.tg_frontend_user;

// console.log(username, password);

// const { connectToDB, runQuery } = require('./utils/DBHelper');

// connectToDB();
// runQuery('any query');


// const { test, expect } = require('@playright')
// const { Given, When, Then } = require('@cucumber')

// const APIHelper = require('./utils/APIHelper');

// APIHelper.get();
// APIHelper.post();

// const { connectToDB, runQuery } = require('./utils/DBHelper');

// connectToDB();
// runQuery();

// const { parseDate } = require('./utils/DateHelper');

// parseDate();

const HomePage = require('./utils/HomePage');
const APIHelper = require('./utils/APIHelper');
const users = require('./utils/Users');

const homePage = new HomePage();
const loginPage = new LoginPage();

console.log(homePage.logo);
console.log(homePage.getLogo());

APIHelper.delete();

const { username, password } = users.tg_frontend_user;
loginPage.login(username, password);