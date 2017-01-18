#! /usr/bin/env node
const imdb = require('imdb-api');
const readline = require('readline');
const myArgs = process.argv.slice(1);
let movie = myArgs[1].split('/').pop();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Searching for ',movie); 
// Promises! 
imdb.get(movie).then( result => {

	console.log('Imbd Rating: ',result.rating)
	rl.question('Press enter to close', (answer) => {
	  // TODO: Log the answer in a database
	  console.log(`Thank you for using my app`);

	  rl.close();
	});
}).catch( err => {
	console.log('Requested item not found in imdb');
	rl.question('Press enter to close', (answer) => {
	  // TODO: Log the answer in a database
	  console.log(`Thank you for using my app`);

	  rl.close();
	});
} );






