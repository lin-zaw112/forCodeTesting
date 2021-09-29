'use strict';
// let hasDriverLicense = false;
// let passTest = true;
// if (passTest)
//     hasDriverLicense = true;
// if (hasDriverLicense) console.log("I has a Driver License");
// function fruitProcessor(apples, oranges) {
//     let juice = `juice with ${apples} apples🍎  and ${oranges} oranges`;
//     console.log(juice);
//     return juice;
// }
// let Juicey = fruitProcessor(5, 3);
// console.log(Juicey);
// console.log(fruitProcessor(5, 3));
// let Juice = fruitProcessor(10, 12);
// console.log(fruitProcessor(10, 12));
// function calcAge1(birthYears) {
//     return 2021 - birthYears;
// }
// const age1 = calcAge1(1975);
// const calcAge2 = function (birthYears) {
//     return 2021 - birthYears;
// }
// const age2 = calcAge2(1999);
// console.log(age1,age2);
// const calcAge3 = birthYears => 2021 - birthYears;
// const age3 = calcAge3(1992);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearUntilRetirement(2006, `Tun Lin Zaw`));
// console.log(yearUntilRetirement(1991, `aung`));
// function cutfruitPieces(fruits) {
//     return fruits * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutfruitPieces(apples);
//     const orangePieces = cutfruitPieces(oranges);
//     const juice = `juice with ${applePieces} pieces of apples🍎  and ${orangePieces} pieces of oranges ⛔ `
//     return juice;;
// }
// console.log(fruitProcessor(2, 3));
// const calcAge = function(birthYear) {
// return 2021 - birthYear;
// };
// const yearUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         return retirement;
//         console.log(`hello I am  if statement`);
//     } else {
//         return -1;
//         console.log(`hello I am  alse statement`);
//     }
//     return retirement;
//     return `${firstName} retires in ${retirement} years.`;
// };
// const yearUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years.`;
//     } else {
//         return -1;
//     }
// };
// console.log(yearUntilRetirement(1991, `John`));
// console.log(yearUntilRetirement(1948, `Mike`));
// console.log(yearUntilRetirement(2006, `Tunlinzaw`));

// const calcScores = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;
// const ScoresOfDolphins = calcScores(44, 23, 71);
// const ScoresOfKoalas = calcScores(65, 54, 49);
// const Dolphins = calcScores(85, 54, 41);
// const Koalas = calcScores(23, 34, 27);

// function checkWinner(scoresDolphins, scoresKoalas) {
//     if (scoresDolphins > (scoresKoalas * 2)) {
//         return `Dolphin's scores is ${scoresDolphins} and Koalas scores is ${scoresKoalas}.Dolphins Team is become the Winner in this season.`;
//     } else if (scoresKoalas > (scoresDolphins * 2)) {
//         return `Koalas scores is ${scoresKoalas} and Dolphin's scores is ${scoresDolphins}.Koalas Team is become the Winner in this season.`;
//     } else {
//         return `NO Teams Win....`;
//     }
// };
// console.log(checkWinner(ScoresOfDolphins, ScoresOfKoalas));
// console.log(checkWinner(Dolphins, Koalas));
// const friend1 = 'Michanl';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
// const friends = ["Michanl", "Steven", "Peter"];
// const years = new Array(1991, 1912, 2003, 2005);
// console.table(friends);
// console.table(years);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';
// console.table(friends);
// const friends = ["Michanl", "Steven", "Peter"];
// const fullName = `Tun lin Zaw`;
// const myBio = [fullName, 2021 - 2006, `April`, 29, 'Webdev', friends];
// console.table(myBio);
// const calcAge = function(birthYears) {
//     return 2021 - birthYears;
// };
// const years = [1991, 1912, 2003, 2005, 2018, 2002, 1929];
// const age1 = calcAge(years[2]);
// const age2 = calcAge(years[3]);
// const age3 = calcAge(years[years.length - 3]);
// console.log(age1, age2, age3);
// const friends = ["Michanl", "Steven", "Peter"];
// const newlength = friends.push('Jay');
// friends.unshift(`John`);
// console.log(friends);
// console.log(newlength);
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);
// const shit = friends.shift();
// console.log(friends);
// console.log(shit);
// console.log(friends.indexOf(`Steven`));
// console.log(friends.indexOf(`teven`));
// console.log(friends.includes(`Steven`));
// console.log(friends.includes(`teven`));
// friends.push(23);
// console.log(friends);
// console.log(friends.includes(`23`));
// if (friends.includes(`Steven`)) {
//     console.log(`You have a friend called Steven`);
// }
// lesson -41 Chding  #2
// const bill = [125, 555, 44];
// let tip = (bill) => Math.ceil(bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
// const b = [];
// b[0] = `The bill was ${bill[0]}.The tip was ${tip(bill[0])} and total value ${bill[0] + tip(bill[0])}`;

// b[1] = `The bill was ${bill[1]}.The tip was ${tip(bill[1])} and total value ${bill[1] + tip(bill[1])}`;

// b[2] = `The bill was ${bill[2]}.The tip was ${tip(bill[2])} and total value ${bill[2] + tip(bill[2])}`;
// console.log(b);
// const myBio = [
//     'lin',
//     'Zaw',
//     2021 - 2006,
//     'Developer',
//      ['Michal', 'Peter', 'Steven']
// ];
// const myBio = {
//     firstName: 'lin',
//     lastName: 'Zaw',
//     age: 2020 - 2006,
//     job: 'Developer',
//     friends: ['Michal', 'Peter', 'Steven']
// };
// myBio.location = 'Myanmar';
// myBio['facebook'] = '@wind';
// myBio.subject = ['JavaSctipt', 'Web Design', 'React Js']
// console.log(myBio);
// console.log(`${myBio.firstName} ${myBio.lastName} open ${myBio.subject.length} subjects and interesting subject is ${myBio.subject[0]}.`);
// const interstIn = prompt('What do you want to know about my Bio?Choose between firstName,lastName,age,job,frieds.');
// if (myBio[interstIn]) {
//     console.log(myBio[interstIn]);
// } else {
//     console.log(`Wrong request ${interstIn} is not property choose between firstName,lastName,age,job,frieds.`);
// }
// let nameKey = 'Name';
// console.log(myBio);
// console.log(myBio.lastName);

// Tun lin Zaw is a 15 years old student and he does not have a driver's license.
// const myBio = {
//         firstName: 'lin',
//         lastName: 'Zaw',
//         birthYear: 2006,
//         job: 'Developer',
//         friends: ['Michal', 'Peter', 'Steven'],
//         calcAge: function() {
//             this.age = 2021 - this.birthYear;
//             return this.age;
//         },
//         hasDriverLicense: function() {
//             this.Driverlicense = this.age >= 18 ? true : false;
//             return this.Driverlicense;
//         },
//         getSummery: function() {
//                 return `${this.firstName} ${this.lastName} is a ${this.calcAge()} years old student and he ${this.hasDriverLicense() ? `has`:`doesn't have`} a driver's license.`;
//         },
// };
// console.log(myBio.getSummery());
// console.log(myBio.calcAge());
// console.log(myBio.age);
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// if (BMIMark > BMIJohn) {
//     console.log(`Mark BMI is Heighter than John BMI.`);
// } else {
//     console.log(`John BMI is Heighter than Mask BMI.`);

// }

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     hight: 1.69,
//     calcBMI: function() {
//         this.BMI = this.mass / this.hight ** 2;
//         return this.BMI;
//     },
//     getSummery: function() {
//         return this.calcBMI() > John.calcBMI() ? `Mark BMI (${this.calcBMI()}) is Heighter than John BMI (${John.calcBMI()}).` : `John BMI (${John.calcBMI()}) is Heighter than Mask BMI (${this.calcBMI()}).`;
//     }
// };
// const John = {
//     fullName: 'John Smith',
//     mass: 92,
//     hight: 1.95,
//     calcBMI: function() {
//         this.BMI = this.mass / this.hight ** 2;
//         return this.BMI;
//     },
//     getSummery: function() {
//         return this.calcBMI() > mark.calcBMI() ? `John BMI (${this.calcBMI()}) is Heighter than Mask BMI (${mark.calcBMI()}).` : `Mark BMI (${mark.calcBMI()}) is Heighter than John BMI (${this.calcBMI()}).`;
//     }
// };
// console.log(mark.getSummery(), John.getSummery());
// console.log(`lifting Weight Repetition 1 🏋 `);
// console.log(`lifting Weight Repetition 2 🏋 `);
// console.log(`lifting Weight Repetition 3 🏋 `);
// console.log(`lifting Weight Repetition 4 🏋 `);
// console.log(`lifting Weight Repetition 5 🏋 `);
// console.log(`lifting Weight Repetition 6 🏋 `);
// console.log(`lifting Weight Repetition 7 🏋 `);
// console.log(`lifting Weight Repetition 8 🏋 `);
// console.log(`lifting Weight Repetition 9 🏋 `);
// console.log(`lifting Weight Repetition 10 🏋 `);
// for (let rep = 1; rep <= 10; rep++) {
//     console.log('lifting Weight Repetition 🏋️‍♂️ ' + rep);
// };
// const myBio = [
//     'lin',
//     'Zaw',
//     2021 - 2006,
//     'Developer', ['Michal', 'Peter', 'Steven'],
//     true,
//     null,
//     undefined,
// ];
// const type = [];
// for (let i = 0; i < myBio.length; i++) {
//     console.log(myBio[i], (typeof myBio[i]));
//     // type[i] = typeof myBio[i];
//     type.push(typeof myBio[i]);
// }
// console.log(type);
// const years = [1991, 2007, 1969, 2006];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2021 - years[i]);

// }
// console.log(years, ages);
// const myBio = [
//     'lin',
//     'Zaw',
//     2021 - 2006,
//     'Developer', ['Michal', 'Peter', 'Steven'],
//     true,
//     null,
//     undefined,
// ];
// for (let i = 0; i < myBio.length; i++) {
//     if (typeof myBio[i] !== 'string') break;
//     console.log(myBio[i], typeof myBio[i]);
// }
// for (let i = myBio.length - 1; i >= 0; i--) {
//     const element = myBio[i];
//     console.log(element);
// }
// for (let exercises = 1; exercises <= 10; exercises += 1) {
//     console.log(`--------------------- Main Exercise ${exercises}`);
//     for (let rep = 1; rep <= 10; rep += 1) {
//         console.log(`------------------ Sub Exercises ${rep}`);
//     }
// }
// for (let rep = 1; rep <= 10; rep++) {
//     console.log('lifting Weight Repetition 🏋️‍♂️ ' + rep);
// };
// let rep = 1;
// while (rep <= 10) {
//     console.log('lifting Weight Repetition 🏋️‍♂️ ' + rep);
//     rep++;
// }
// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);
// while (dice !== 6) {
//     console.log(`You Rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('loop is about to end ....');
// };
// const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let calctip = (bill) => Math.ceil(bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
// const tip = [];
// const total = [];
// for (let i = 0; i < bill.length; i += 1) {
//     console.log(`The bill was ${bill[i]}.The tip was ${calctip(bill[i])} and total value ${bill[i] + calctip(bill[i])}.`);
// }
// const calcAverage = function(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i += 1) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };
// for (let i = 0; i < bill.length; i += 1) {
//     tip.push(calctip(bill[i]));
//     total.push(bill[i] + tip[i]);
// }
// console.log(calcAverage(bill), calcAverage(tip), calcAverage(total));
// console.log(bill, tip, total);