let currentSlideIndex = 0;
let pics = [
    "http://127.0.0.1:5501/PersonalPortfolio/images/stairs-image.jpg",
    "http://127.0.0.1:5501/PersonalPortfolio/images/looking-at-painting.jpg",
    "http://127.0.0.1:5501/PersonalPortfolio/images/outside.jpg"
];

console.log(document.getElementsByClassName("portrait-images"));
let arrows = document.getElementsByClassName("arrows");
console.log(arrows[0]);

let portraitHTML = `<img class="portrait-images" src="${pics[currentSlideIndex]}">`;
let leftArrowHTML = `<img class="arrows" id="left-slideshow-arrow" src="${arrows[0].src}" onclick="forwardArrow()">`;
let rightArrowHTML = `<img class="arrows" id="right-slideshow-arrow" src="${arrows[1].src}" onclick="forwardArrow()">`;

document.querySelector(".portrait-container").innerHTML = portraitHTML + leftArrowHTML + rightArrowHTML;

function forwardArrow() {
    currentSlideIndex = (currentSlideIndex + 1) % pics.length;
    portraitHTML = `<img class="portrait-images" src="${pics[currentSlideIndex]}">`;
    document.querySelector(".portrait-container").innerHTML = portraitHTML + leftArrowHTML + rightArrowHTML;
}

function backArrow() {
    currentSlideIndex = (currentSlideIndex - 1) % pics.length;
    portraitHTML = `<img class="portrait-images" src="${pics[currentSlideIndex]}">`;
    document.querySelector(".portrait-container").innerHTML = portraitHTML + leftArrowHTML + rightArrowHTML;
}

