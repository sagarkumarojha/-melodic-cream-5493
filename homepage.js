import {getMovies,appendMovies} from "./components/getData.js"
const API_KEY = 'api_key=11193c256ad986f3be31059a8cc4d2d7';
const BASE_URL = 'https://api.themoviedb.org/3';
const popularMoviesData_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;






let data= await getMovies(popularMoviesData_URL);
console.log(data);

let moviesDiv1 = document.getElementById("movies")

let moviesDiv = document.getElementById("movies2")


appendMovies(data,moviesDiv1)
 appendMovies(data,moviesDiv)









const gap = 16;
const carousel = document.getElementById("cardContainer1"),
    content = document.getElementById("movies"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");

next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
    }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width2 = carousel2.offsetWidth));




const carousel2 = document.getElementById("cardContainer2"),
    content2 = document.getElementById("movies2"),
    next2 = document.getElementById("next2"),
    prev2 = document.getElementById("prev2");

next2.addEventListener("click", e => {
    carousel2.scrollBy(width2 + gap, 0);
    if (carousel2.scrollWidth !== 0) {
        prev2.style.display = "flex";
    }
    if (content2.scrollWidth - width2 - gap <= carousel2.scrollLeft + width2) {
        next2.style.display = "none";
    }
});
prev2.addEventListener("click", e => {
    carousel2.scrollBy(-(width2 + gap), 0);
    if (carousel2.scrollLeft - width2 - gap <= 0) {
        prev2.style.display = "none";
    }
    if (!content2.scrollWidth - width2 - gap <= carousel2.scrollLeft + width2) {
        next2.style.display = "flex";
    }
});

let width2 = carousel2.offsetWidth;
window.addEventListener("resize", e => (width2 = carousel2.offsetWidth));


