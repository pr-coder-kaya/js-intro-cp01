class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    getInfo() {
        console.log(this);
    }
}

module.exports = Product;