"use strict";

// a = 5;

// console.log(a);

// let number = 10;
// console.log(number);

// let num = [1,2,3];
// console.log(num[1]);

// const numberConst = 22;

// number = 20;
// console.log(number);

// const obj = {
//     a: 50
// };

// let obj2 = {
//     Name: 'Mayil',
//     Surname: 'Kerimov',
//     IsMarried: false
// };

// console.log(obj2.IsMarried);

// console.log(obj);

// obj.a = 20;
// console.log(obj);

// console.log(names);
// var names = 'Mayil'; 
// var hoisting
// let surname = 'Zeynalov';
// {
//     var sur = 'Kerimov';
//     surname = sur;
// }

// console.log(sur);
// console.log(surname);

// {
//     let surs = 'Kerimov';
// }
// console.log(surs);

// let storeDescription = {
//     budget:10000,
//     employees:['Kerumov','Sadikhan','Aliyev'],
//      products : {
//         xleb:4,
//         lod:10
//     },
//     open:true
// };

// console.log(storeDescription.employees[1]);


// let objnew = {
//     '1': 'Kerimov',
//     b: 3,
//     c: 1,
//     2:'Hello'

// };

// objnew.a = "Load";

// objnew[5] = 'Mayil';



// console.log(objnew);
// console.log(objnew.a);
// // console.log(objnew['b']);
// // Better dot notation
// console.log(objnew[1]);
// console.log(objnew[2]);

// const syb = Symbol("Id");

// console.log(syb.toString());

// const result = confirm("Are you here?");

// const answer = +prompt("Вам есть 18?");

// if(answer < 18){
//     alert('Warning');
// }

// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Adivizi daxil edin', '');
// answers[1] = prompt('Soyadivizi daxil edin', '');
// answers[2] = prompt('Yasivizi daxil edin', '');

// document.write(answers);
// document.close();

// let nums = 1;

// console.log(nums++);
// console.log(nums);

console.log(typeof(null));

let numa = 0;

console.log(Number.isNaN(numa / 0));
console.log(isNaN(numa / 0));

console.log(0);

console.log( NaN || 2 || undefined );
 
console.log( NaN && 2 && undefined );
 
console.log( 1 && 2 && 3 );
 
console.log( !1 && 2 || !3 );
 
console.log( 25 || null && !3 );
 
console.log( NaN || null || !3 || undefined || 5);
 
console.log( NaN || null && !3 && undefined || 5);
 
console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}else{
    console.log("Nope");
}

console.log(hamburger && cola);

var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
    console.log(output);
    break;
  case 1:
    output += 'What ';
    output += 'Is ';
    console.log(output);
    break;
  case 2:
    output += 'Your ';
    console.log(output);
    break;
  case 3:
    output += 'Name';
    console.log(output);
    break;
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}

for(let i = 0; i < 3; i++){
  console.log(i);
  for(let j = 0; j < 3; j++){
    console.log(j);
  }
}

let result = '';

const lengtH = 7;

for(let i = 0; i < lengtH; i++){
  for(let j = 0; j < i; j++){
    result += '*';
  }
  
  result += '\n';
}

console.log(result);

for(let i = 5; i <= 10; i++ ){
  console.log(i);
}

for(let i = 20; i > 0; i-- ){
  console.log(i);
  
}

for(let i = 2; i <=10; i++){
  if(i % 2 === 0){
    console.log(i);
  }
}

for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
      continue;
  } else {
      console.log(i);
  }
}

let oddnum = 1;
 
while(oddnum <= 15){
  oddnum++;
  if(oddnum % 2 === 0){
    continue;
  }else{
    console.log(oddnum);
  }
}

const arrayOfNumbers = [];


for(let i = 5; i <= 10; i++){
  arrayOfNumbers[i-5] = i;
}

console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const results = [];

//     for (let i = 0; i < arr.length; i++) {
//       results[i] = arr[i];
//     }


    // const data = [5, 10, 'Shopping', 20, 'Homework'];

    // for (let i = 0; i < data.length; i++) {
    //   if(typeof(data[i]) === 'number'){
    //     data[i] *= 2;
    //   }else{
    //     data[i] += ' - done';
    //   }
    // }

    // console.log(data);

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const resulta = [];
    // let dataL = data.length;
    // for (let i = data.length-1; i >= 0; i--) {
    //   resulta[5-dataL] = data[i];
    //   dataL--;
    // }

    // console.log(resulta);
    
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const resulT = [];

    for (let i = 1; i <= data.length; i++) {
        resulT[i - 1] = data[data.length - i];
    }

    console.log(resulT);