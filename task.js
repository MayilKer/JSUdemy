"use strict";

const options = {
    name: 'test',
    with: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};

const{
    border: b,
    bg: g
} = options.colors;

console.log(g);
const {border, bg} = options.colors;
console.log(bg);

options.makeTest();

console.log(Object.keys(options).length);

// delete options.name;
let counter = 0;
for (let key in options){
    if(typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    }else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);

const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }


  let arr = [1,2,3,4,5,7];

  arr.forEach(function(item,i,arr){
    console.log(`${i}: ${item} в массиве ${arr}`);
  });

  for (let i of arr){
    console.log(i);
  }

  for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }



  arr.pop();
  arr.push(4);

  const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%', 
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj){
        const {age} = obj;
        const {languages} = obj.skills;
        let str = `Мне ${age} и я владею языками: `;
        languages.forEach(function(lang){
            str+= `${lang.toUpperCase()} `;
        });
        return str;
    }
};

let {js,php,c:aaa = 199} = personalPlanPeter.skills.programmingLangs;

console.log(aaa);


console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str ='';
    let{programmingLangs} = plan.skills;
    for(let value in programmingLangs){
        str+=`Язык ${value} изучен на ${programmingLangs[value]}\n`;
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.skills.exp);

function showExperience(obj){
    const{exp} = personalPlanPeter.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));
 

let user = { name: "John", years: 30 };

let {name : n ,years : age ,isAdmin = false} = user;
console.log(n);
console.log(age);
console.log(isAdmin);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    log : {
        a:2
    }
  };

  let ass = {};

  Object.assign(ass,salaries);
  ass.log.a = 10;
  console.log(ass.log.a);

  function topSalary(obje){
    let max = 0;
    let maxName = null;
    for(let [name,salary] of Object.entries(obje)){
         if(max < salary){
            max = salary;
            maxName = name;
         }
    }
    return maxName;
  }

  console.log(topSalary(salaries));

  let arr2 = [2,5,1,3,31,41,32,11];
  

  function sorting(a,b){
    return a - b;
  }

  arr2.sort(sorting);

  console.log(arr2);

  for(let i in arr2){
    console.log(`${i}: ${arr2[i]}`);
  }

  let obtest = {
    a:3,
    led : {
        solid : 500,
        leko : 100
    }
  };

  for(let key in obtest){
        for(let i in obtest[key]){
            console.log(`${i},${obtest[key][i]}`);
    }
  }


  let original = {
    a:2,
    b:3,
    c:{
        d:12,
        l:10
    }
  };

  for(let key in original){
    console.log(original[key]);
  }

  function clone(obj){
    let copyObj = {};
    let key;
    for(key in obj){
        copyObj[key] = obj[key];
    }
    return copyObj;
  }

  let newobj = clone(original);

  newobj.a = 177;

  console.log(original.a);
  console.log(newobj.a);

  let copyArr = [1,2,3,4,5];

  let newArr = copyArr.splice();

  const arr1 = [1,2,3,4,5],
        arr3 = [6,7,8,9,10];
        
const interneet = [...arr1,...arr3];
console.log(interneet);
  

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';
    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
    arr.forEach(member => {
        str += `${member} `;
    });
    return str;
}

console.log(showFamily(family));



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}

console.log(standardizeStrings(favoriteCities));

const someString = 'This is some strange string';

function reverse(str) {
    return str.split("").reverse().join('');
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = '';
  arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
  arr.forEach(function(valute){
    if(valute !== missingCurr){
      str += `${valute}\n`;
    }
  });
  return str;
}


console.log(availableCurr([...baseCurrencies,...additionalCurrencies]));


