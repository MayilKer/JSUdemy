// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').previousElementSibling);
// console.log(document.querySelector('#current').previousSibling);
// console.log(document.querySelector('#current').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.body.firstElementChild);

for (let node of document.body.childNodes){
    if(node.nodeName === '#text'){
        continue;
    }

    console.log(node);
}

var arcticle = document.getElementById('acticle');

arcticle.dataset.current = 1;

if(arcticle.dataset.current > 2){
    console.log("True");
}else{
    console.log('false');
}

