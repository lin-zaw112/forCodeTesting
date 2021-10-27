'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const restaurant = {
  restaurantname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:20',
    address = 'Mogok',
  }) {
    // console.log(
    //   `Order Receive ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`
    // );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicus pasta with ${ing1},${ing2} and ${ing3}`);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

const orderObject = restaurant.orderDelivery({
  time: '20:30',
  address: 'Bogo',
  mainIndex: 1,
  starterIndex: 2,
});

const newRestaurant = {
  foundIn: 2000,
  ...restaurant,
  founder: '💥',
  numGuests: '',
};
const guest1 = newRestaurant.numGuests || null;
console.log(guest1);
// console.log(newRestaurant);
// console.log(null || false);
// console.log(false || null);
// console.log(undefined || '');

// console.log(restaurant.orderPizza("hello","add",2,2,2,2,2,2,2,2));

// const addNumber = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// addNumber(1,2,3,2);
// addNumber(3,2,3,2);
// addNumber(43,2);
// addNumber(2,2);

// const {sat,...weekday} = restaurant.openingHours;
// console.log(sat,weekday);

// const [a, ,c,b,...other] = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(a,c,b,other);

// const arr = [1, 2, ...[3, 4]];
// console.log(arr);
// const [a,b,...other] = [1,2,3,4,5];
// console.log(a,b,other);

// const ingredient = [
//   prompt('plese Enter Your ingredient Number 1'),
//   prompt('plese Enter Your ingredient Number 2'),
//   prompt('plese Enter Your ingredient Number 3'),
// ];
// restaurant.orderPasta(...ingredient);
// const firstName = 'tun';
// const midName = 'lin';
// const lastName = 'zaw';
// const fullName = [...firstName ,' ',...midName ,' ',...lastName];
// console.log(fullName);
// const newMainMenu = [...restaurant.mainMenu];
// const newStartMenu = [...restaurant.starterMenu];
// const menu = [...newMainMenu, ...newStartMenu];
// console.log(menu);

// const newMainMenu = [...restaurant.mainMenu, ' မုန်ဟင်းခါး'];
// console.log(newMainMenu);

// const arr = [7, 8, 9, 10];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr);

// const newArr = [1, 2, 3, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const {openingHours} = restaurant;
// const{fri: {open:o,close:c}} = openingHours;
// console.log(o,c);
// let a = 250;
// let b = 300;
// const obj = {a:20,b:30};
// ({a,b} = obj);
// console.log(a,b);

// const { menu = [], starterMenu = []} = restaurant;
// console.log(menu, starterMenu);

// const {
//   restaurantname: fullname,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(fullname, hours, tags);

// const nested = [2, 3, [5, 6]];
// const [i, , [j, k]] = nested;

// console.log(i, j, k);

// const [a = 1, b = 1, c = 1, d = 1] = [8, 9];
// console.log(a, b, c, d);
// console.log(restaurant.order(2, 2));

// const [firstMenu, secondMenu] = restaurant.order(2, 1);
// console.log(firstMenu, secondMenu);

// let [first, second] = restaurant.categories;
// console.log(first, second);

// [first, second] = [second, first];
// console.log(first, second);

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);
// const [x, y, z] = arr;
// console.log(x, y, z);
