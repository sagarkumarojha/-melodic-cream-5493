

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