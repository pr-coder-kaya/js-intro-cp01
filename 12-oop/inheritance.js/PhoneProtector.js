const Product = require("./Product");

class PhoneProtector extends Product {
    constructor(title, price) {
        super(title, price);
    }
}

module.exports = PhoneProtector;