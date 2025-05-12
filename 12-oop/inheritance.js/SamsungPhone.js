const Product = require("./Product");

class SamsungPhone extends Product {
    constructor(title, price, brand) {
        super(title, price);
        this.brand = brand;
    }
}

module.exports = SamsungPhone;