'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        console.log(personalMovieDB.count);

        while (personalMovieDB.count === 0 || personalMovieDB.count === '' || personalMovieDB.count === null || personalMovieDB.count === isNaN(numberOfFilms)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i ++) {
            const a = prompt('Один из последних просмотренных фильмов?', '');
            const b = +prompt('На сколько оцените его?', '');

            if (a !== '' && a !== null && b !== 0 && b !== null && a.length <= 50) {
                personalMovieDB.movies[a] = b;
            }
            else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
            if (genre === '' && genre === null) {
                console.log('You have entered incorrect data or have not entered any data at all.')
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${item}`)
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};












