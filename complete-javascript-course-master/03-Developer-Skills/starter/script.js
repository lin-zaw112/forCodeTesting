"use stict";

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const temperatures = [3, -2, -6, 1, "error", 9, 13, 17, 15, 14, 9, 5];
// const calcTemp = function(temps) {
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== "number") continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     return max - min;
// };
// console.log(calcTemp(temperatures));
// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const temperatures = [3, -2, -6, 1, "error", 9, 13, 17, 15, 14, 9, 5];
// const calcTemp = function(t1, t2) {
//     const temps = t1.concat(t2);;
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== "number") continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     return max - min;
// };
// const amplitude = calcTemp([21, 12, 4]);
// console.log(amplitude);
// const measuerKelvin = function() {
//     const measurement = {
//         type: "temp",
//         unit: "celcius",
//         value: Number(prompt("Number")),
//     };
//     // console.log(measurement);
//     // console.table(measurement);
//     // console.log(measurement.value);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);
//     const kelvin = measurement.value + 273;
//     return kelvin;
// };
// console.log(measuerKelvin());
// const calcTemp = function(t1, t2) {
//     const temps = t1.concat(t2);;
//     let max = 0;
//     let min = 0;
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== "number") continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitude = calcTemp([21, 12, 4], [32, 23, 76]);
// console.log(amplitude);
// ...17°C in 1 days...21°C in 2 days...23°C in 3 days...
// const data_1 = [17, 21, 23];
// const data_2 = [12, 5, -5, 0, 4];

// function dataPrint(arr) {
//     let sum = "";
//     for (let i = 0; i < arr.length; i++) {
//         sum += ` ${arr[i]}°C in ${i + 1} days. ...`;
//     };
//     console.log(`...` + sum);
// };
// dataPrint(data_2)