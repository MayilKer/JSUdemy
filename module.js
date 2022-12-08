"use strict";

const number = 1;

(function(){
    let number = 2;

    console.log(number);
    console.log(number + 5);
}());

console.log(number);



const user = (function(){
    const privat = function(){
        console.log("Say Hello");
    };

    return {
      sayHello : privat  
    };
}());

user.sayHello();