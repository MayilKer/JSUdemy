"use strict";

let numberOfFilms;
let checkNumFilm = false;
while(checkNumFilm === false){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели",'');

    if(isNaN(numberOfFilms) || numberOfFilms === 0){
        alert("Wrong");
    }else{
        alert(numberOfFilms);
        checkNumFilm = true;
    }
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for(let i = 0; i < 2; i++){
    const a = prompt("Один из последних фильмов который посмотрели",""),
      b = prompt("Оцените его", "");

      if(a != null && b != null && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log("Success");
      }else{
        console.log("Error");
        i--;
      }


}

if(personalMovieDB.count < 10){
    console.log("Malo");
}else if(personalMovieDB.count >= 10  && personalMovieDB.count < 30 ){
    console.log("Normalno");
}else if(personalMovieDB.count >= 30 && personalMovieDB.count < 50){
    console.log("Kinoman");
}else{
    console.log("Error");
}




      console.log(personalMovieDB);

