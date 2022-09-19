"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function(){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели",'');
        while(personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели",'');
        }
    },

    saveMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const a = prompt("Один из последних фильмов который посмотрели",""),
              b = prompt("Оцените его", "");
        
              if(a != null && b != null && a != '' && b != '' && a.trim(' ') != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
              }else{
                console.log("Error");
                i--;
              }
        }
    },

    writeYourGenres: function(){
      for(let i = 1; i <= 3; i++){
        const a = prompt(`Ваш любимый жанр под номером ${i}`,"");
    
          if(a != null && a.length < 50 && a.trim(' ') != ''){
            personalMovieDB.genres[i-1] = a;
          }else{
            console.log("Error");
            i--;
          }
        }
      this.genres.forEach((element,index) => {
        console.log(`Любимый жанр #${index+1} - это ${element}`);
      });
    },

    toggleVisibleMyDb: function(){
      if(!this.private){
        this.private = true;
      }else{
        this.private = false;
      }
    },

    showMyDb: function(){
      if(!this.private){
        console.log(personalMovieDB);
    }else{
        console.log('Movie Db is private');
    }
    }

};

// personalMovieDB.start();

// personalMovieDB.saveMyFilms();

// personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDb();

// personalMovieDB.showMyDb();





// function ShowMyDb(hidden){
//     if(!hidden){
//         console.log(personalMovieDB);
//     }else{
//         console.log('Movie Db is private');
//     }
// }

// ShowMyDb(personalMovieDB.private);

