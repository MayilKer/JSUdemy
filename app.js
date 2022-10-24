const account = {
    name: 'Alex',
    surname: 'Jackson',
    birthday: '03/7/2010',
    showMyPublicData: function(){
        console.log(`${this.name}, ${this.surname}, ${this.birthday}`);
    }
};

for (let key in account){
    console.log(account[key]);
}

let arr = ['s', 'b', 'h'];

for (let key of arr.sort()){
    console.log(key);
}

console.dir(arr);

const salaries = {
    John: 500,
    Luna: 2000,
    Jack: 5000,
    sayHello: function(){
        console.log('Hello World');
    }
};

salaries[Symbol.iterator] = function(){
    return {
        current: this.John,
        last: this.Jack,

        next(){
            if(this.current < this.last){
                this.current = this.current + 500;
                return {done: false, value: this.current};
            }else{
                return {done: true};
            }
        }
    };
};

for (let value of salaries){
    console.log(value);
}



const user3 = {
    name: 'Alex',
    surname: 'Dawson',
    birthday: '04/10/1988',
    showMyPublicData: function(){
        console.log('Hello');
    }
};

console.log(Object.entries(user3));
const userMap = new Map(Object.entries(user3));
console.log(userMap);

const newUserObject = Object.fromEntries(userMap);
console.log(newUserObject);

// Object.defineProperty(user3, 'showMyPublicData', {enumerable: false});

// for (let key in user3){
//     console.log(key);
// }

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{rice: 200}, 10000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

console.log(map);

console.log(map.keys());

const goods = [];

for (let shop of map.keys()){
    goods.push(Object.keys(shop)[0]);
}

console.log(goods);

for (let price of map.values()){
    console.log(price);
}

for (let [shop, price] of map.entries()){
    console.log(shop ,price);
}

map.forEach((value, key, map) => {
    console.log(value, key);
});

const forSet = ['Alex', 'Alex', 'Smith'];

function unique(arr){
    return Array.from(new Set(forSet));
}

console.log(unique(forSet));

const set = new Set(forSet);

set.add('alex')
   .add('Anna');

// console.log(set);

// set.delete();
// set.has();
// set.clear();

// console.log(set.size);

// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain);
// });

for (let value of set){
    console.log(value);
}

console.log(set.values());
console.log(set.keys());
console.log(set.entries());


let int = 10;
let ars = [1,2,3,4];
ars.push(11);
console.log(ars);


function amountOfPages(summary){
    let number = 0;
    let result = '';
    for (let i = 1; i <= summary; i++){
        result += i;
        if(result.length === summary){
            number = i;
            break;
        }
    }
    return number;
}


console.log(amountOfPages(1095));