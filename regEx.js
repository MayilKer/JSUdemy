'use strict';

// let word = prompt('Your name');

// let reg = /n/ig;

// console.log(word.search(reg));
// console.log(word.match(reg));


// let password = prompt("Write your password");

// console.log(password.replace(/./g, '*'));


let number = prompt('Enter you phone number');

let reg = /\d/g;

let newStr = (number.match(reg)).join('');
// console.log(reg.test(number));

console.log(newStr);

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/ig));
