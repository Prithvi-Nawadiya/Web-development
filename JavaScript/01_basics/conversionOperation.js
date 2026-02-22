let score = "87abc";

console.log(typeof score); //number to string
console.log(typeof(score))

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber); //NaN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isloggedIn = 1
let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn); //true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); //string