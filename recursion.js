'use strict';

const form = document.getElementById('form');
function Calculate(event){
    let num = Number.parseInt(event.target.firstElementChild.value);
    let power = Number.parseInt(event.target.firstElementChild.nextElementSibling.value);

    let result = 1;
    for(let i = 0; i < power; i++){ 
        if(power < 0){
            console.log('Error');
            break;
        }
        result *= num;
    }

    console.log(result);
    console.log(event.target);
    event.preventDefault();
}

form.addEventListener('submit', Calculate);



// function powRec(x, y){
//     let res = 1;
    
//     for(let i = 0; i < y; i++){
//         res *= x;
//     }

//     return res;
// }

function powRec(x, y){
    if(y === 1) {
        return x;
    } else {
        return x * powRec(x, y - 1);
    }
}
 
console.log(powRec(2, 3));


let student = {
    js : [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],
        lets: {
            students: [{
                name: 'Logan',
                progress: 99
            }]
        }
    }
};

// for (let subCourse of Object.values(student)){
//     console.log(subCourse);
// }

// for(let course in student){
//     if(Array.isArray(student[course])){
//         for (let i =0; i < student[course].length; i++){
//             console.log(student[course][i].progress);
//         }
//     }
// }


function getTotalProgressByIteration(data){
    let students = 0;
    let totalProgress = 0;

    for (let course of Object.values(data)){
        if(Array.isArray(course)){
            students += course.length;
            for (let i = 0; i < course.length; i++){
                totalProgress += course[i].progress;
            }
        }else{
            for (let subCourse of Object.values(course)){
                students += subCourse.length;
                for (let i = 0; i < subCourse.length; i++){
                    totalProgress += subCourse[i].progress;
                }
            }
        }
    }

    return totalProgress / students;
}

// console.log(getTotalProgressByIteration(student));

function getTotalProgressByRecursion(data){
    if(Array.isArray(data)){
        let total = 0;

        for (let i = 0; i < data.length; i++){
            total += data[i].progress;
        }
        return [total, data.length];
    }else{
        let total = [0, 0];
        for (let subData of Object.values(data)){
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(student);

console.log(result);

console.log(result[0] / result[1]);






// let eda = {
//     name: [{
//         led: 10
//     }]
// };

// const{led} = eda.name[0];

// console.log(led);

// const[a,...rest] = student.js;

// console.log(rest);


function factorial(n) {
    if(Number.isInteger(n) && typeof(n) === 'number'){
        if(n >= 1){
            return n*= factorial(n-1);
        }else{
            return 1;
        }
    }else{
        return 'error';
    }
}

console.log(factorial(5));

function fib(n){
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(1));

const fibV2 = n => {
    let prev = 0, next = 1;
    for(let i = 0; i < n; i++){
      let temp = next;
      next = prev + next;
      prev = temp;
    }
    return prev;
};

console.log(fibV2(1));

function rev(){
    let num = 0;
    function call(){
        num++;
        console.log(num);
    }
    return call;
}

let zet = rev();

let z1 = zet();
let z2 = zet();
let z3 = zet();


console.log(Number.isNaN(8/0));
console.log(isNaN(8/0));
let arr = ['1'];
let obj = {
    a: 2
};

console.log(typeof(arr));
console.log(typeof(obj));
console.log(typeof(undefined));

let a = 0;

console.log(a ?? 12);
