"use strict";

const soldier = {
    health : 400,
    armor : 100,
    sayHello : function(){
        console.log(soldier.health);
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