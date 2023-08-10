'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let lastFilmName1 = prompt('Один из последних просмотренных фильмов', ''),
    lastFilmGrade1 = prompt('На сколько оцените его?', ''),
    lastFilmName2 = prompt('Один из последних просмотренных фильмов', ''),
    lastFilmGrade2 = prompt('На сколько оцените его?', '');

let personalMovieDB = {
    count: Number(numberOfFilms),
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.movies[lastFilmName1] = lastFilmGrade1;
personalMovieDB.movies[lastFilmName2] = lastFilmGrade2;

console.log(personalMovieDB);

