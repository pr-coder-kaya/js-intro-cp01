const Product = require("./Product");

class MacBook extends Product {
    constructor(title, price, brand) {
        super(title, price);
        this.brand = brand;
    }
}

module.exports = MacBook;