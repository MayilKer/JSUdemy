'use strict';

const checkbox = document.querySelector('#checkbox'),
      color = document.querySelector('#color'),
      wrapper = document.querySelector('.wrapper');

if(localStorage.getItem('isChecked')){
    checkbox.checked = true;
} 

checkbox.addEventListener('change', (e) => {
    if(localStorage.getItem('isChecked')){
        localStorage.removeItem('isChecked');
    }else{
        localStorage.setItem('isChecked', true);
    }
});

if(localStorage.getItem('color')){
    wrapper.style.backgroundColor = localStorage.getItem('color');
}

color.addEventListener('click', (e) => {
    if(localStorage.getItem('color')){
        localStorage.removeItem('color');
        wrapper.style.backgroundColor = 'white';
    }else{
        localStorage.setItem('color', 'blue');
        wrapper.style.backgroundColor = localStorage.getItem('color');  
    }
});