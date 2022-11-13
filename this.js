"use strict";



// 1)with strict mode this function will show undefined, but without strict mode input will be - Window.
function CallWindow(){
    console.log(this);
}

CallWindow();
///

//2)Will execute object - objectThis
const objThis = {
    a: 2,
    b: 3,
    thisFunc: function(){
        console.log(this);
    }
};

objThis.thisFunc();
///



//3) this в конструкторах и классах - это новый экземпляр объекта

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        return `${this.name} says Hello`;
    };
}

const newUser = new User('Mayil', 23);
///

const per = {
    name: 'Matilda'
};

function aboutYourself(surname){
    console.log(`${this.name} ${surname}`);
}



aboutYourself.apply(per,['Semonovna']);
aboutYourself.call(per,'Kerimova');

// Ручная привязка this: call, apply, bind

function count(num){
    return this*num;
}

const double = count.bind(2);

console.log(double(12));


const objT = {
    num: 2,
    saynumber: function(){
        const say = () =>{
            console.log(this.num);
        };
        say();
    }
};

objT.saynumber();

const double2 = a => a*2;

console.log(double2(2));