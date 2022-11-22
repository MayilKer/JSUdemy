'use strict';

let names = ['Ann', 'Ivan', 'Allesandro','Alexander'];

let shortNames = names.filter(name => name.length < 5);

names.filter(function(name){
    return name.length < 5;
});

console.log(shortNames);

let answers = ['AnA','AlExAnder'];

let newAnswers = answers.map(name => name.toUpperCase());

console.log(newAnswers);

const somethings = [10,'qewqe',21];

console.log(somethings.some(item => typeof(item) === 'number'));


console.log(somethings.every(item => typeof(item) === 'number'));