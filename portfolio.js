let currentSlideIndex = 0;
let pics = [
    "http://127.0.0.1:5501/PersonalPortfolio/images/stairs-image.jpg",
    "http://127.0.0.1:5501/PersonalPortfolio/images/outside.jpg"
];

let arrows = document.getElementsByClassName("arrows");

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

function videoFunction(element) {
    if (element.src === "http://127.0.0.1:5501/PersonalPortfolio/images/play.jpg") {
        // console.log(element.previousElementSibling);
        element.previousElementSibling.play();
        element.src = "http://127.0.0.1:5501/PersonalPortfolio/images/pause.png"
        element.style.backgroundColor = "white";
        element.style.height = "70px"
        // console.log(element.style);
    }
    else {
        element.previousElementSibling.pause();
        element.src = "./images/play.jpg";
        element.style.height = "70px"
    }
}
