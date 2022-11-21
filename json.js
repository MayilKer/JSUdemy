"use strict";

let user  = {
    name: 'Flankes',
    surname: 'Flankesov',
    parent: {
        isWorking: false
    }
};
console.log(JSON.stringify(user));

let copyUser = JSON.parse(JSON.stringify(user));
let copyUser2 = Object.assign({}, user);
user.parent.isWorking = true;
copyUser.name = 'Filandria';
console.log(copyUser.parent.isWorking);
console.log(user.parent.isWorking);
console.log(copyUser2.parent.isWorking);