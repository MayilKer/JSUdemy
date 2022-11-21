"use strict";


console.log("Запрос данных");

const prom = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Подготовка данных");
    
    
        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    

    },2000);
});

prom.then((product) => {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            product.statust = 'active';
            resolve(product);
            // reject(); 
        },2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);    
}).catch(() => {
    console.error("Произошла ошибка"); 
}).finally(() => {
    console.log("Форма очишена");
});

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(),time);
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log("2000 ms"));


Promise.all([test(3000).then(() => console.log('First')), test(4000).then(() => console.log('second'))]).then(() => {
    console.log('All');
});

Promise.race([test(3000).then(() => console.log('First')), test(4000).then(() => console.log('second'))]).then(() => {
    console.log('All');
});




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

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);   
}

console.log(showGoodFilms(films));