'use strict';

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const option = [`0 : JavaScript`, `1: Python`, `2: Rust`, `3: C++`];
const poll = {
  question: 'What is your favourite programming language?',
  option,
  answer: new Array(4).fill(0),
  registerNewAnswer() {
    prompt(
      `${this.question} 
 ${this.option.join('\n')}
(write Option number)`
    );
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer);
poll.registerNewAnswer();
// const bookings = [];
// const creatBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 75000 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   bookings.push(booking);
//   console.log(booking);
// };
// creatBooking(`BO737`, 5);

// const flight = 'LH324';
// const mgmg = {
//   fullName: 'Mg Mg Myint',
//   passport: 3415432,
// };
// const newPassport = function (person) {
//   mgmg.passport = Math.trunc(Math.random() * 100000);
//   if (person.passport === mgmg.passport) {
//     alert('Checked In');
//   } else {
//     alert('Passport Number is Wrong!');
//   }
// };
// newPassport(mgmg);
// console.log(mgmg);
// const checkIn = function (flight, passenger) {
//   flight = 'LH989';
//   passenger.fullName = 'Mr.' + passenger.fullName;
//   if (passenger.passport === 3415432) {
//     alert('Checked In');
//   } else {
//     alert('Passport Number is Wrong!');
//   }
//   console.log(passenger, flight);
// };
// checkIn(flight, mgmg);
// console.log(flight);
// console.log(mgmg);
// const upperFistWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const transfer = function (str, fn) {
//   console.log(`original String : ${str}`);
//   console.log(`Transfer String : ${fn(str)}`);
//   console.log(`Work function with : ${fn.name}`);
// };
// transfer('JavaScript is the best programming language', upperFistWord);
// transfer('JavaScript is the best programming language', oneWord);

// const height5 = function () {
//   console.log(':)');
// };
// document.body.addEventListener('click', height5);

// ['Mg Mg', 'Mg Ba', 'Mg Mya'].forEach(height5);

// const greet = greeting => name => console.log(`${name} ${greeting}`);
// const greety = greet('Hey !');
// greet('heee!')('MG');
// greety('Mg Mg');
// greety('hello world');

// const airMyanmar = {
//   airLine: 'Air Myanmar',
//   iataCode: 'MA',
//   booking: [],
//   // book,
// };

// const airAsia = {
//   airLine: 'Air Asia',
//   iataCode: 'AA',
//   booking: [],
//   // book,
// };

// const asiaDragon = {
//   airLine: 'Asia Dragon',
//   iataCode: 'BD',
//   booking: [],
//   // book,
// };

// const book = function (flightNum, name) {
//   console.log(
//     `${name} booked a sent on ${this.airLine} flight ${this.iataCode}${flightNum}`
//   );
//   this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
// };
// book.call(airMyanmar, 1243, 'tun zaw');
// book.call(airAsia, 323, 'Nay Htoo Naing');
// book.call(airMyanmar, 1243, 'tunf zaw');
// const flightData = [111, 'ZAW ZAw Aung'];
// book.apply(asiaDragon, flightData);
// book.call(asiaDragon, ...flightData);

// const bookBind = book.bind(airAsia);
// bookBind(23, 'hello world');

// const bookMyanmar = book.bind(airMyanmar);
// const bookAsia = book.bind(airAsia);
// const bookDragon = book.bind(asiaDragon);
// const book25 = book.bind(asiaDragon, 25);
// book25('ewj;lk');

// airMyanmar.planes = 300;
// airMyanmar.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // airMyanmar.buyPlane();
// document
//   .querySelector('.buy')
//   .addEventListener('click', airMyanmar.buyPlane.bind(airMyanmar));
// const addTxt = (rate, value) => value + value * rate;
// console.log(addTxt(0.1, 200));
// const addGame = addTxt.bind('', 0.5);
// console.log(addGame(262));
