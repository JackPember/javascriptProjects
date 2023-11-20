const container = document.getElementById('container');

const blue = new Image(500, 500);
blue.src = "blue.jpg";
const red = new Image(500, 500);
red.src = "red.jpg";
const green = new Image(500, 500);
green.src = "green.jpg";
const purple = new Image(500, 500);
purple.src = "purple.jpg";
const orange = new Image(500, 500);
orange.src = "orange.jpg";

const colors = [];
colors.push(blue);
colors.push(red);
colors.push(green);
colors.push(purple);
colors.push(orange);

let counter = -1;

const prevSlide = () => {
    if (counter === 0) {
        counter = 5;
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    counter--;
    container.appendChild(colors[counter]);
}

const nextSlide = () => {
    if (counter === 4) {
        counter = -1;
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    counter++;
    container.appendChild(colors[counter]);
}

const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

const changeSlide = () => {
    if (counter === (colors.length-1)) {
        counter = -1;
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    counter++;
    container.appendChild(colors[counter]);
} 

const slideShow = () => {
    setInterval(changeSlide, 5000);
}
slideShow();

