import {getMovies,appendMovies,appendMovies2,appendMovies3} from "./components/getData.js"
const API_KEY = '&api_key=11193c256ad986f3be31059a8cc4d2d7';
const BASE_URL = 'https://api.themoviedb.org/3';
const popularMoviesData_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc'+API_KEY;
const heighestRatedMovies=BASE_URL+'/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc'+API_KEY;
const mostPopularKidsMvies=BASE_URL+'/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'+API_KEY;
const BestMovies=BASE_URL+'/discover/movie?primary_release_year=2021&sort_by=vote_average.desc'+API_KEY;
const BestDramas=BASE_URL+'/discover/movie?with_genres=18&primary_release_year=2014'+API_KEY;
const scienceFictionMovies=BASE_URL+'/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;






let data= await getMovies(popularMoviesData_URL);
console.log(data);

let data2= await getMovies(heighestRatedMovies);
console.log(data2);

let data3= await getMovies(mostPopularKidsMvies);
console.log(data3);

let data4= await getMovies(BestMovies);
console.log(data4);

let data5= await getMovies(BestDramas);
console.log(data5);

let data6= await getMovies(scienceFictionMovies);
console.log(data6);

let moviesDiv1 = document.getElementById("movies")

let moviesDiv = document.getElementById("movies2")
let moviesDiv3 = document.getElementById("movies3")
let moviesDiv4 = document.getElementById("movies4")
let moviesDiv5 = document.getElementById("movies5")
let moviesDiv6 = document.getElementById("movies6")

let moviesDiv7 = document.getElementById("movies7")
let moviesDiv8 = document.getElementById("movies8")
let moviesDiv9 = document.getElementById("movies9")
let moviesDiv10 = document.getElementById("movies10")


appendMovies2(data,moviesDiv1)
 appendMovies(data2,moviesDiv)
 appendMovies(data3,moviesDiv3)
 appendMovies2(data4,moviesDiv4)
 appendMovies3(data5,moviesDiv5)



 appendMovies2(data6,moviesDiv6)
 appendMovies(data5,moviesDiv7)
 appendMovies(data2,moviesDiv8)
 appendMovies2(data3,moviesDiv9)
 appendMovies3(data4,moviesDiv10)












































