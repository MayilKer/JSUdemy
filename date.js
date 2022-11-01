'use strict';

let date = new Date();

console.log(date.toLocaleString());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getUTCHours());
console.log(date.getTimezoneOffset());
console.log(date.getTime());

let newDate = new Date('2022-11-01');

console.log(newDate);