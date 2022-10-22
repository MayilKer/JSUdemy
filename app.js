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