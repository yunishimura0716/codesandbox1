/**
 * const and let
 */

// let val1 = "this is the let variable";
// console.log(val1);
// const val2 = "This is the const variable";
// console.log(val2);
// const obj1 = {
//   name: "Yu",
//   age: 22
// };
// console.log(obj1);
// const obj2 = ["100", "101", "110"];
// obj2.push("210");
// console.log(obj2);

/**
 * template string
 */
// const name = "Yu";
// const age = "22";
// console.log(`Hi, I'm ${name} and ${age} years old`);

/**
 * arrow function
 */
// const times10 = (arr) => {
//   for (let i in arr) {
//     arr[i] *= 10;
//   }
//   return arr;
// };
// console.log(times10(obj2));
// const { name, age } = obj1;
// console.log(`Hi, I'm ${name} and ${age} years old`);
// const [num1, num2] = obj2;
// console.log(`cpsc${num1}, cpsc${num2}.`);

/**
 * spread statement
 */
// const arr1 = [1, 2];
// const sumFunc = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(sumFunc(...arr1));

/**
 * map and filter function
 */
const nameArr = ["Yu", "John", "Roy", "Heyley"];
// nameArr.map((name) => console.log(name + " Nishiura"));
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newnumArr = numArr.filter((num) => num % 2 === 1);
console.log(newnumArr);
nameArr.map((name, idx) => console.log(`${idx}: ${name} Nishimura`));
