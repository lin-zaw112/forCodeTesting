'use strict';
// var firstName = 'kyawkyaw';
// const mgmg = {
// 	firstName: 'mgmg',
// 	years: 1990,
// 	calcAge: function () {
// 		console.log(2021 - this.years);
// 		console.log(this);
// 		const isMillenial = () => {
// 			console.log(this.years >= 1200 || this.years <= 1991);
// 		};
// 		isMillenial();
// 	},
// 	// greet: function () {
// 	// return console.log(`hay! ${this.firstName}`);
// 	// },
// 	// greet: () => console.log(`hay! ${this.firstName}`),
// };
// // mgmg.greet();
// mgmg.calcAge();
// const addExp = function (a, b) {
// 	console.log(arguments);
// 	return a + b;
// };
// addExp(1, 3);
// addExp(3, 3, 2, 2);
const jessica2 = {
	firstName: 'Jessica',
	lastName: 'William',
	age: 30,
	family: ['Mg Mg', 'Kyaw Kyaw'],
};
const jessiaCopy = Object.assign({}, jessica2);
jessiaCopy.lastName = 'David';

jessiaCopy.family.push('Marry');
jessiaCopy.family.push('bob');
console.log(jessica2);
console.log(jessiaCopy);
