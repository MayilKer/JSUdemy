"use strict";

const soldier = {
    health : 400,
    armor : 100,
    sayHello : function(){
        console.log(this.health);
    }
};


let john2 = Object.create(soldier);

const john = {
    health : 200
};

//old

// john.__proto__ = soldier;

//new

Object.setPrototypeOf(john,soldier);

// console.log(john.armor);

john.sayHello();

john2.sayHello();

console.log('Hello World');

const objjj = {};

console.log(Object.getPrototypeOf(objjj) === Object.prototype);


let val = 1.3425;

console.log(typeof(val.toString()));

console.log(typeof(String(null)));
console.log(typeof(String(3)));

console.log([[]] == false);



function Zac(){
    let b = 0;

    const incr = function(){
        b+=1;
        return b;
    };

    return incr;
}

let increment = Zac();

let t1 = increment();
let t2 = increment();
let t3 = increment();

console.log(t1,t2,t3);

function Sum(a){
    return function(b){
        return a + b;
    };
}

console.log(Sum(10)(5));
console.log(Sum(4)(1));
console.log(Sum(5)(-7));

let vals = 7;
 function createAdder() {
   function addNumbers(a, b) {
     vals = a + b;
     return vals;
   }
   return addNumbers;
}
let adder = createAdder();
let sum = adder(vals, 8);
console.log('example of function returning a function: ', sum);
console.log(adder(vals, 8));



const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    Boolean(prop);
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (parseInt(fDish.price,10) + (parseInt(sDish.price,10)) < parseInt(average,10)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({},data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);

console.log(restorantData.waitors);

