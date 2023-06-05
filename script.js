let dimensions = 100;
const container = document.getElementById("container");
let color = "black";

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

const resize = document.getElementById("resize");
resize.addEventListener("click", redraw);

function redraw() {
    dimensions = parseInt(prompt("How many pizels on each side?"));
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    draw();
}

function colorOver(event) {
    event.target.style.backgroundColor = String(color);
};

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", changeColor);

function changeColor(event) {
     color = event.target.value;

};

const buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseenter", function(){
        this.style.transform = "scale(1.1)"
    });
    buttons[i].addEventListener("mouseleave", function(){
        this.style.transform = "scale(1.0)";
    })
}




