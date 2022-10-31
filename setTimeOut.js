// const timeOut = setTimeout(function(){
//     console.log('Hello');
// },2000);

// const timeOut2 = setTimeout(function(text){
//     console.log(text);
// },2000, 'hi');


// const timer = setTimeout(logger, 2000);

// clearInterval(timer);
const btn = document.querySelectorAll('.btn');
let timeSet,
    i = 0;



function logger(){
    if(i == 3){
        clearInterval(timeSet);
    }
    console.log('this is logger');
    i++;
}

btn[0].addEventListener('click', () => {
    timeSet = setInterval(logger,500); 
});





