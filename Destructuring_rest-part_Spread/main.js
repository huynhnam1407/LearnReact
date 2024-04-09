// Destructuring with object
// const user = {
//   name: "Nam",
//   age: 22,
//   sex: "male",
// };

// const { age, sex, name } = user;

// console.log(user);

// // Destructuring with array
// const list = [
//   1,
//   function (a, b) {
//     return a + b;
//   },
// ];

// const [value, sum] = list;

// console.log(sum(2, 3));

// Spread Syntax
// const user = {
//   name: "Nam",
//   age: 22,
//   sex: "male",
// };

// const cloneUser = { ...user };
// const cloneUser = user; True
// console.log(cloneUser === user);

/**
 *
 * Rest Parameter
 *
 * **/

const handle = (a, b, ...c) => {
  return c;
};

const value = handle(1, 2, 3, 4, 5, 6);

console.log(value);
