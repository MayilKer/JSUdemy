"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");

if(isNaN(numberOfFilms) ){
    alert("Wrong");
}else{
    alert(numberOfFilms);
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Один из последних фильмов который посмотрели"),
      b = prompt("Оцените его"),
      c = prompt("Один из последних фильмов который посмотрели"),
      d = prompt("Оцените его");

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);


      const randomNum = 50;

      (randomNum === 50) ?  console.log("OK") : console.log("Nope");