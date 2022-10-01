import {getMovies,appendMovies,appendMovies2} from "./components/getData.js"
const API_KEY = 'api_key=11193c256ad986f3be31059a8cc4d2d7';
const BASE_URL = 'https://api.themoviedb.org/3';
const popularMoviesData_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;






let data= await getMovies(popularMoviesData_URL);
console.log(data);

let moviesDiv1 = document.getElementById("movies")

let moviesDiv = document.getElementById("movies2")
let moviesDiv3 = document.getElementById("movies3")
let moviesDiv4 = document.getElementById("movies4")


appendMovies(data,moviesDiv1)
 appendMovies(data,moviesDiv)
 appendMovies(data,moviesDiv3)
 appendMovies2(data,moviesDiv4)










