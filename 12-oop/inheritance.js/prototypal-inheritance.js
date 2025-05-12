function Car() {

}

Car.prototype.drive = function () {
    console.log('DRIVE');
}

Car.prototype.brake = function () {
    console.log('BRAKE');
}




function Tesla() {

}

Tesla.prototype = Object.create(Car.prototype);

Tesla.prototype.charge = function () {
    console.log('CHARGE');
}

const teslaY = new Tesla();
teslaY.drive();
teslaY.brake();
teslaY.charge();


// Prototype Chaining
console.log(teslaY.__proto__);
console.log(teslaY.__proto__.__proto__);
console.log(teslaY.__proto__.__proto__.__proto__);