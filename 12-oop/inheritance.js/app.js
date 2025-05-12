const MacBook = require("./MacBook");
const PhoneProtector = require("./PhoneProtector");
const SamsungPhone = require("./SamsungPhone");

const pp = new PhoneProtector('XSeller Good Condition Phone Protector', 10.99);
const sp = new SamsungPhone('Galaxy S25 Ultra', 1100, 'Samsung');
const mb = new MacBook('MacBook Pro 13" 1 TB SSD', 1600, 'Apple');

pp.getInfo();
sp.getInfo();
mb.getInfo();

console.log(pp.__proto__); // Product {}
console.log(pp.__proto__.__proto__); // {}