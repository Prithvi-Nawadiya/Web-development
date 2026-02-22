let val = 10;
let negVal = -val;

console.log(negVal);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);

console.log(2**3); // 2 to the power of 3 => 8

console.log(5%2); // modulus operator => gives the remainder => 1

let str1 = "hello";
let str2 = "world";

console.log(str1 + " " + str2); // string concatenation => "hello world"

console.log("1" + 2); // "12" => string concatenation
console.log("1" - 2); // -1 => string is converted to number and then subtraction is performed

console.log("1" + 2 + 3); // "123" => string concatenation is performed from left to right
console.log(1 + 2 + "3"); // "33" => addition is performed first and then string concatenation is performed

console.log(1 + "2" + 3); // "123" => addition is performed first and then string concatenation is performed

console.log(true);
console.log(+true);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

console.log(num1, num2, num3); // 4 4 4

let gameCounter = 100
++gameCounter;
console.log(gameCounter);



//PREFIX AND POSTFIX INCREMENT

let x = 3
const y = x++

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"