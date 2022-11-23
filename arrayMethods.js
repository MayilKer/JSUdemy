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

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

const tranformedArray = setFilmsIds(films);

console.log(tranformedArray);

function checkFilms(arr) {
    return arr.every(film => typeof(film.id != 'undefined'));
}

console.log(checkFilms(tranformedArray));

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
   return data.filter(num => Math.sign(num.amount) === 1).reduce((pre,cur) => pre + cur.amount,0);
};

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    if(data.filter(num => Math.sign(num.amount) !== 1)){
        return data.reduce((pre,cur) => pre + cur.amount,0);
    }else{
       return getPositiveIncomeAmount(data);
    }
};


console.log(getTotalIncomeAmount(funds));