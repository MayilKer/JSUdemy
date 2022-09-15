"use strict";


let numbersas = 10;

const foosas = n =>{
  n*=10;
  console.log(n);
};

console.log(numbersas);
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


    const lines = 5;
    let resulte = '';

    for(let i = 0; i <= lines; i++){
      for(let k = 0; k < lines-i; k++){
        resulte+=" ";
      }
      for(let j = 0; j < i*2+1; j++){
        resulte += '*';
      }
      
      
      resulte += '\n';
    }

    console.log(resulte);

    const logger = (a,b) => a + b;

    console.log(logger(1,2));


    function sayHello(name) {
      return `Привет,${name}`;
    }

    console.log(sayHello("mayil"));

    function returnNeighboringNumbers(num) {
      return [num-1,num,num+1];
    }

    console.log(returnNeighboringNumbers(5));

    
    function getMathResult(num1, num2) {
      if(typeof(num2) !== 'number' || num2 <= 0){
        return num1;
      }
      let full = '';
        for(let i = 1; i <= num2; i++){
          if(i !== num2){
            full += `${num1*i}---`;
          }else{
            full += `${num1*i}`;
          }
  
        }

      return full;
    }

    console.log(getMathResult(5,3));

    console.log(x);

    var x = 4;


    const fruit = 'some fruit';

    console.log(fruit.indexOf('ruit'));
    console.log(fruit.slice(2,5));
    console.log(fruit.slice(-4,-1));


    
    var showName = function(){
      console.log("Mayil");
    };
    showName();
   

    showName();

    function showName(){
      console.log('Mayil');
    }

    function calculateVolumeAndArea(cube) {
      if(cube === null || isNaN(cube) || cube <= 0 || !Number.isInteger(cube)){
        return 'При вычислении произошла ошибка';
      }
      return `Объем куба:${Math.pow(cube,3)}, площадь всей поверхности:${6*Math.pow(cube,2)}`;
    }

    console.log(calculateVolumeAndArea(15));

    function getCoupeNumber(seat) {
      if(!Number.isInteger(seat) || seat < 0 || typeof(seat) !== 'number'){
        return 'Ошибка. Проверьте правильность введенного номера места';
      }
      else if(seat > 36 || seat === 0){
        return 'Таких мест в вагоне не существует';
      }
      return Math.ceil(seat/4);
    }

    console.log(getCoupeNumber(37));

    function getTimeFromMinutes(minutes) {
      if(typeof(minutes) !== 'number' || !Number.isInteger(minutes) || minutes < 0){
        return 'Ошибка, проверьте данные';
      }
      let minute = 0;
      let hours = 0;
      let firstCheck = true;
      let secondCheck = true;
      hours = minutes / 60;
      minute = minutes % 60;
      if(Math.floor(hours) >= 2 && Math.floor(hours) <= 4){
        firstCheck = false;
      }
      if(Math.floor(hours) === 0 || hours > 5){
        secondCheck = false;
        firstCheck = false;
      }
      return `Это ${Math.floor(hours)} ${firstCheck ? 'час' : secondCheck ? 'часа' : 'часов'} и ${minute} минут`;
    }

    console.log(getTimeFromMinutes(670));

    function findMaxNumber(num1,num2,num3,num4) {
      if(
      typeof(num1) !== 'number' || 
      typeof(num2) !== 'number' || 
      typeof(num3) !== 'number' || 
      typeof(num4) !== 'number'){
        return 0;
      }
      return Math.max(num1,num2,num3,num4);
    }

    console.log(findMaxNumber(1,2767,5));

    console.log(Math.max(1,2333,34));


    function findTime(minutesTotal){
      let hours = Math.floor(minutesTotal / 60);
      let minute = minutesTotal % 60;
      let str = '';
      switch(hours){
        case 0:
          str = 'часов';
          break;
        case 1:
          str = 'час';
          break;
        case 2:
        case 3:
        case 4:
          str = 'часа';
          break;
        default:
          str = 'часов';
      }
      return `Это ${hours} ${str} и ${minute} минут`;
    }

    console.log(findTime(120320));

    function fib(n) {
      let a = 1;
      let b = 1;
      let str = '0 1';
      for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;

        str+=' ' + a;
      }
      return str;
    }

    console.log(fib(5));

    function fib(n) {
      if (typeof(n) !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return "";
    }
      let str = '';
      let a = 0;
      let b = 1;
      for(let i = 0; i < n; i++){
        if(i+1 === n){
          str+= `${a}`;
        }else{
          str+= `${a} `;
        }
        let c = a + b;
        a = b;
        b = c;
      }
      return str;
    }

    console.log(fib(1));

    console.log(typeof(String));

    function first(){
      setTimeout(function(){
        console.log("Hello");
      },500);
    }

    function second(){
      console.log("Second");
    }

    first();
    second();

    function Call(lang,callback){
      console.log(`I am ${lang} function`);
      callback();
    }

    Call('regular',function(){
      console.log('I am callback function');
    });

    let options = {
      height : 1000,
      name : 'letssa'
    };

    console.log(typeof(''+1+0));

    options.up = function(){
      this.height +=1;
    };

    console.log(options.height);
    options.up();

    delete options.name;
    console.log(options.name);

    console.log(Math.floor(-5.2));

    var text = 'login';
    console.log(text.charAt(2));
    var num = 1.126334;

    console.log(num.toFixed());

    var arr = [5,6,7,8,9,10,11,12];

    console.log(arr.some(a=>a>10 & a%2===0));


    console.log(Math.round(2.6663244));

    let funccas = function(){
      console.log('hello');
    } ;
    funccas();

    function hasil(){
      let result = 1;

      for(let i = 11; i < 15; i++){
        result*=i;
      }
      return result;
    }

    console.log(hasil());

    
    function Calculate(){

      let one = document.getElementById('onein').value;
      let seconds = document.getElementById('secondin').value;
      alert(one*seconds);
    }


    function GetHoursAndMinute(minutes){
      let hour = Math.floor(minutes/60);
      return hour;
    }

  console.log(GetHoursAndMinute(130));

  var el =  document.getElementById('childs');

  console.log(el.parentElement);

  const para = document.createElement("input");

  para.setAttribute('placeholder', 'Enter Something');
  para.setAttribute('class', 'Enter');
  para.setAttribute('class', 'No d-block');

  el.parentElement.appendChild(para);


  console.log(undefined || null);

  let str = 'mayil nurlan';

  

  console.log(str.split(' '));


  

