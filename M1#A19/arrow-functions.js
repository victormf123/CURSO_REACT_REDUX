'use strict'
console.log('Arrow functions:')

// var sum = function (x, y){
//   return x + y
// }

// var sum = (x, y) => {
//   return x + y
// } 

var sum = (x, y) => x + y

console.log(sum(1, 2))

var add1 = (x) => sum(x, 1)

console.log(add1(5))