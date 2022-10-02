

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
window.addEventListener("resize", e => (width = carousel.offsetWidth));




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



const carousel3 = document.getElementById("cardContainer3"),
    content3 = document.getElementById("movies3"),
    next3 = document.getElementById("next3"),
    prev3 = document.getElementById("prev3");

next3.addEventListener("click", e => {
    carousel3.scrollBy(width3 + gap, 0);
    if (carousel3.scrollWidth !== 0) {
        prev3.style.display = "flex";
    }
    if (content3.scrollWidth - width3 - gap <= carousel3.scrollLeft + width3) {
        next3.style.display = "none";
    }
});

prev3.addEventListener("click", e => {
    carousel3.scrollBy(-(width3 + gap), 0);
    if (carousel3.scrollLeft - width3 - gap <= 0) {
        prev3.style.display = "none";
    }
    if (!content3.scrollWidth - width3 - gap <= carousel3.scrollLeft + width3) {
        next3.style.display = "flex";
    }
});

let width3 = carousel3.offsetWidth;
window.addEventListener("resize", e => (width3 = carousel3.offsetWidth));




const carousel4 = document.getElementById("cardContainer4"),
    content4 = document.getElementById("movies4"),
    next4 = document.getElementById("next4"),
    prev4 = document.getElementById("prev4");

next4.addEventListener("click", e => {
    carousel4.scrollBy(width4 + gap, 0);
    if (carousel4.scrollWidth !== 0) {
        prev4.style.display = "flex";
    }
    if (content4.scrollWidth - width4 - gap <= carousel4.scrollLeft + width4) {
        next4.style.display = "none";
    }
});
prev4.addEventListener("click", e => {
    carousel4.scrollBy(-(width4 + gap), 0);
    if (carousel4.scrollLeft - width4 - gap <= 0) {
        prev4.style.display = "none";
    }
    if (!content4.scrollWidth - width4 - gap <= carousel4.scrollLeft + width4) {
        next4.style.display = "flex";
    }
});

let width4 = carousel4.offsetWidth;
window.addEventListener("resize", e => (width4 = carousel4.offsetWidth));


const carousel5 = document.getElementById("cardContainer5"),
    content5 = document.getElementById("movies5"),
    next5 = document.getElementById("next5"),
    prev5 = document.getElementById("prev5");

next5.addEventListener("click", e => {
    carousel5.scrollBy(width5 , 0);
    
});
prev5.addEventListener("click", e => {
    carousel5.scrollBy(-(width5), 0);
   
});

let width5 = carousel5.offsetWidth;
window.addEventListener("resize", e => (width5 = carousel5.offsetWidth));





const carousel6 = document.getElementById("cardContainer6"),
    content6 = document.getElementById("movies6"),
    next6 = document.getElementById("next6"),
    prev6 = document.getElementById("prev6");

next6.addEventListener("click", e => {
    carousel6.scrollBy(width6 + gap, 0);
   
});

prev6.addEventListener("click", e => {
    carousel6.scrollBy(-(width6 + gap), 0);
   
});

let width6 = carousel6.offsetWidth;
window.addEventListener("resize", e => (width6 = carousel6.offsetWidth));




const carousel7 = document.getElementById("cardContainer7"),
    content7 = document.getElementById("movies7"),
    next7 = document.getElementById("next7"),
    prev7 = document.getElementById("prev7");

next7.addEventListener("click", e => {
    carousel7.scrollBy(width7 + gap, 0);
   
});
prev7.addEventListener("click", e => {
    carousel7.scrollBy(-(width7 + gap), 0);
   
});

let width7 = carousel7.offsetWidth;
window.addEventListener("resize", e => (width7 = carousel7.offsetWidth));



const carousel8 = document.getElementById("cardContainer8"),
    content8 = document.getElementById("movies8"),
    next8 = document.getElementById("next8"),
    prev8 = document.getElementById("prev8");

next8.addEventListener("click", e => {
    carousel8.scrollBy(width8 + gap, 0);
  
});

prev8.addEventListener("click", e => {
    carousel8.scrollBy(-(width8 + gap), 0);

});

let width8 = carousel8.offsetWidth;
window.addEventListener("resize", e => (width8 = carousel8.offsetWidth));




const carousel9 = document.getElementById("cardContainer9"),
    content9 = document.getElementById("movies9"),
    next9 = document.getElementById("next9"),
    prev9 = document.getElementById("prev9");

next9.addEventListener("click", e => {
    carousel9.scrollBy(width9 + gap, 0);
   
});
prev9.addEventListener("click", e => {
    carousel9.scrollBy(-(width9 + gap), 0);
   
});

let width9 = carousel9.offsetWidth;
window.addEventListener("resize", e => (width9 = carousel9.offsetWidth));







const carousel10 = document.getElementById("cardContainer10"),
    content10 = document.getElementById("movies10"),
    next10 = document.getElementById("next10"),
    prev10 = document.getElementById("prev10");

next10.addEventListener("click", e => {
    carousel10.scrollBy(width10 , 0);
    
});
prev10.addEventListener("click", e => {
    carousel10.scrollBy(-(width10), 0);
   
});

let width10 = carousel10.offsetWidth;
window.addEventListener("resize", e => (width10 = carousel10.offsetWidth));





