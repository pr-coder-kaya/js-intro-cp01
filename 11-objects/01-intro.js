const person = {
	fname: 'John',
	lname: 'Doe',
	age: 25
};


for(const k in person) {
    console.log(k);
    console.log(person[k]);
}