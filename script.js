let dimensions = 16;
const container = document.getElementById("container");

for (i = dimensions; i > 0; i--){
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
}
const gridRows = document.getElementsByClassName("gridRow");
for (let i = 0; i < gridRows.length; i++) {
    const gridRow = gridRows[i];

    gridRow.style.height = `${800 / dimensions}px`;
    gridRow.style.minWidth = "800px";
    gridRow.style.display = "flex";
    for (let j = dimensions; j > 0; j--){
        let pixel = document.createElement("div");
        pixel.style.height = `${800 / dimensions}px`;
        pixel.style.width = `${800 / dimensions}px`;
        gridRow.appendChild(pixel).className = "pixel";
    }

  }


 