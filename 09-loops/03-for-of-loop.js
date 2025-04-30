const names = ['John', 'Jane', 'Mariia'];

for(let i = 0; i < names.length; i++) {
	console.log(names[i]);
}

for(const name of names) {
	console.log(name);
}

// We mostly use it with arrays (secondly objects)