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