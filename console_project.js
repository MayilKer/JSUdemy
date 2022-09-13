"use strict";

let numberOfFilms;

function Start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели",'');
    while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели",'');
    }
}

Start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function saveMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt("Один из последних фильмов который посмотрели","").trim(),
          b = prompt("Оцените его", "");
    
          if(a != null && b != null && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log("Success");
          }else{
            console.log("Error");
            i--;
          }
    }
}

saveMyFilms();

function checkFilmsCount(){
    if(personalMovieDB.count < 10){
        console.log("Malo");
    }else if(personalMovieDB.count >= 10  && personalMovieDB.count < 30 ){
        console.log("Normalno");
    }else if(personalMovieDB.count >= 30 && personalMovieDB.count < 50){
        console.log("Kinoman");
    }else{
        console.log("Error");
    }
}

checkFilmsCount();

function writeYourGenres(){
    // for(let i = 1; i <= 3; i++){
    //     const a = prompt("Ваш любимый жанр","");
    
    //       if(a != null && a.length < 50 && a.trim(' ') != ''){
    //         personalMovieDB.genres[i-1] = `${i}:${a}`;
    //         console.log("Success");
    //       }else{
    //         console.log("Error");
    //         i--;
    //       }
    // }

    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();



function ShowMyDb(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }else{
        console.log('Movie Db is private');
    }
}

ShowMyDb(personalMovieDB.private);

