"use strict";

const boxNew = document.querySelector('.boxNew');

let observer = new MutationObserver(mutationrecord => {
    console.log(mutationrecord);
});

observer.observe(boxNew, {
    childList: true
});