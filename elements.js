'use strict';

const nav = document.getElementById('nav');
const boxes = document.getElementsByName('boxes');
const boxColl = document.getElementsByClassName('box');
const buttonColl = document.getElementsByTagName('button');
const navNode = document.querySelector('#nav');
const boxNode = document.querySelectorAll('.box');
const divNode = document.querySelectorAll('div');
const wrapper = document.getElementById('wrapper');
const hearts = document.querySelectorAll('.heart');



boxes.forEach(a => {
    console.log(a);
});



console.log(nav);
console.log(boxes);
console.log(boxColl);
console.log(buttonColl);
console.log(navNode);
console.log(boxNode);
console.log(divNode);

nav.style.backgroundColor = 'green';
boxColl[0].style.cssText = 'color: red; width: 200px; background-color: grey;';

hearts.forEach(element => {
    element.style.backgroundColor = 'red';
});

// document.body.append(document.createTextNode('hELLO World'));

const div = document.createElement('div');
div.classList.add('black');
document.body.append(div);
nav.appendChild(div);
// document.body.prepend(div);

// document.querySelector('.heart').append(div);

const text = document.createTextNode('Hello World');

const sibling = document.createElement('div');

sibling.style.width = '100px';
sibling.style.height = '200px';
sibling.style.backgroundColor = 'red';
sibling.style.display = 'flex';
sibling.style.alignItems = 'center';
sibling.style.justifyContent = 'center';

// hearts[0].before(sibling);
// hearts[1].after(text);
// hearts[1].after(sibling);
// hearts[2].remove();
// hearts[0].replaceWith(boxes[0]);

wrapper.insertBefore(sibling,hearts[2]);
wrapper.removeChild(hearts[2]);
wrapper.replaceChild(boxes[0],hearts[0]);

sibling.textContent = 'Hello Mayil';

sibling.innerHTML = '<p>How are you?</p>';

sibling.insertAdjacentHTML('beforeend','<h2>Olaaa</h2>');

const btn = document.querySelectorAll('button');
const eventCreate = document.getElementById('eve'),
      overlay = document.querySelector('.overlay');

btn[0].addEventListener('click', () => {
    setTimeout(function(){
        alert('Hello');
    },2000);
});

btn[0].addEventListener('click', () =>{
    console.log("Hello World");
});

let counter = 0;

const eventDelete = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // counter++;
    // if(counter == 1){
    //     eventCreate.removeEventListener('click', eventDelete);
    // }
};

eventCreate.addEventListener('click', eventDelete);
overlay.addEventListener('click', eventDelete);

btn.forEach( btn => {
    btn.addEventListener('click', eventDelete, {once: true});
});
