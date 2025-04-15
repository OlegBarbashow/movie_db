'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    console.log(numberOfFilms);

    while (numberOfFilms === 0 || numberOfFilms === '' || numberOfFilms === null || numberOfFilms === isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();












