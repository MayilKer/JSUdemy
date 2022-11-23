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

let numbers = [1,2,3];

console.log(numbers.reduce((sum, current) => sum + current));

// third argument, starts width 3
console.log(numbers.reduce((sum, current) => sum + current,3));

let words = ['apple', 'waterlemon', 'pear'];

console.log(words.reduce((sum, current) => sum + ' ' + current));


let obj = {
    Ann: 'Persone',
    dog: 'Animal',
    Ben: 'Persone'
};


const objToArr = Object.entries(obj)
.filter(item => item[1] === 'Persone')
.map(item => item[0]);

console.log(objToArr);

let objarr = Array.from(obj);
console.log(objarr);

for(let [key, value] of Object.entries(obj)){
    console.log(`${key}, ${value}`);
}


const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showListOfFilms(arr) {
    return arr.map(film => film.name).reduce((sum, cur) => `${sum}, ${cur}`);
}

console.log(showListOfFilms(films));