let dimensions = 16;
const container = document.getElementById("container");
let color = "black";
let rainbowStatus = false;
const sliderValue = document.getElementById("demo");
const slider = document.getElementById("slider");

slider.addEventListener("input", handleSliderChange);

function handleSliderChange(event) {
    dimensions = event.target.value;
    sliderValue.textContent = dimensions + " x " + dimensions;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    draw();
}


function draw() {
    for (i = dimensions; i > 0; i--) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
    const gridRows = document.getElementsByClassName("gridRow");
    for (let i = 0; i < gridRows.length; i++) {
        const gridRow = gridRows[i];

        gridRow.style.height = `${650 / dimensions}px`;
        gridRow.style.minWidth = "650px";
        gridRow.style.display = "flex";
        for (let j = dimensions; j > 0; j--) {
            let pixel = document.createElement("div");
            pixel.style.height = `${650 / dimensions}px`;
            pixel.style.width = `${650 / dimensions}px`;
            gridRow.appendChild(pixel).className = "pixel";
        }

    }
    const pixels = document.getElementsByClassName("pixel");

    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener("mouseover", colorOver);
    }
}
draw();



function colorOver(event) {
    if (rainbowStatus == true) {
        event.target.style.backgroundColor = getRandomColor()

    }
    else {
        event.target.style.backgroundColor = String(color);
    }
};

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", changeColor);

function changeColor(event) {
    turnOff();
    color = event.target.value;

};

const buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)"
    });
    buttons[i].addEventListener("mouseleave", function () {
        this.style.transform = "scale(1.0)";
    })
}

const eraser = document.getElementById("eraser");
eraser.addEventListener("click", function () {
    turnOff();
    color = "white";
    eraser.classList.add("on");
});

const black = document.getElementById("black");
black.addEventListener("click", function () {
    turnOff();
    color = "black";
    black.classList.add("on");
});

const rainbow = document.getElementById("rainbow");
rainbow.addEventListener("click", function () {
    turnOff();
    rainbow.classList.add("on");
    rainbowStatus = true;

});

function getRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    return randomColor
}

const clear = document.getElementById("clear");
clear.addEventListener("click", function () {
    turnOff();
    pixels = document.getElementsByClassName("pixel");
    for (let i = 0; i < pixels.length; i++) {

        pixels[i].style.backgroundColor = "white";

    }

});






const options = document.getElementById("options");
function turnOff() {
    rainbowStatus = false;
    for (let i = 0; i < options.children.length; i++) {
        const childElement = options.children[i];
        childElement.classList.remove("on");
    }
}


const gitLink = document.getElementById("link");
gitLink.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.5)"
});
gitLink.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1.0)";
})