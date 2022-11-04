'use strict';

//ES5

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        return `${this.name} says Hello`;
    };
}

User.prototype.exit = function() {
    return `user - ${this.name} has logged out`;
};

const noob = new User('Xeyrulla',1);
const pro = new User('Mayil',2);

console.log(noob.exit());
console.log(pro.exit());

//ES5 END


function Calculator(){
    this.read = function(){
        this.a = +prompt('first', '');
        this.b = +prompt('second', '');
    };
    this.calculate = function() {
        alert(this.a + this.b);
    };
}

let calc = new Calculator();

calc.read();

calc.calculate();