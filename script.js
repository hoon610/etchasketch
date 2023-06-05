let dimensions = 16;
const container = document.getElementById("container");

for (i = dimensions; i > 0; i--){
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
}
const gridRows = document.getElementsByClassName("gridRow");
for (let i = 0; i < gridRows.length; i++) {
    const gridRow = gridRows[i];
    
    // Set the height property
    gridRow.style.height = `${800 / dimensions}px`;
    
    // Set the min-width property
    gridRow.style.minWidth = "800px";
  }