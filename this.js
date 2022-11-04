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

function aboutYourself(surname){
    console.log(`${this.name} ${surname}`);
}

const per = {
    name: 'Matilda'
};

aboutYourself.apply(per,['Semonovna']);
aboutYourself.call(per,'Kerimova');