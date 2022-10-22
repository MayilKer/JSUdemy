// 'use strict';

// let id = Symbol('id');


// const objs = {
//     name: 'Mayil',
//     [id]: 1,
//     getId: function(){
//         return this[id];
//     }
// };


// // let id = Symbol('id');

// // objs[id] = 1;

// // console.log(objs);

// for (let value in objs){
//     console.log(value);
// }

// console.log(objs.getId());

// console.log(objs[Object.getOwnPropertySymbols(objs)[0]]);


const user = {
    name: 'Alex',
    surname: 'Jackson',
    birthday: '03/7/2010',
    showMyPublicData: function(){
        console.log(`${this.name}, ${this.surname}, ${this.birthday}`);
    }
};

// writable
// enumerable
// configurable


// user.showMyPublicData();

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

Object.defineProperty(user, 'name', {writable: false});
// Create own property
Object.defineProperty(user, 'gender', {value: 'male'});

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// error
// user.name = 'SDAsdasdad';

for (let item in user){
    console.log(item);
} 



