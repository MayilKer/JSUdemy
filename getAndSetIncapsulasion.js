"use strict";

const person = {
     name : "Alex",
     age : 23,

     get PersonInfo(){
        return this.age;
     },

     set PersonInfo(num){
        this.age = num;
     }
};

console.log(person.PersonInfo = 19);
console.log(person.age);




class User{
   constructor(name, age) {
      this._name = name;
      this._age  = age;
   }


   say() {
      console.log(`Имя пользователя ${this._name}, возраст ${this._age}`);
   }

   get age() {
      return this._age;
   }

   set age(age) {
      if(typeof age === 'number' && age > 0 && age < 110){
         this._age = age;
      }else{
         console.log("Недопустимые значения!");
      }
   }
}

const Mayil = new User("Mayil", 23);

console.log(Mayil.age);

Mayil.age = 40;

console.log(Mayil.age);

Mayil.say();
