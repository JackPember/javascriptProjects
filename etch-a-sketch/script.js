

//STEP 1:

const setupGrid = () => {
    const container = document.querySelector(".container");
    for (let i = 0; i < 256; i++){
        let newDiv = document.createElement("div");
        newDiv.textContent = "etch-a-sketch";
        container.appendChild(newDiv);
    }
}



//Step 2: 

const addDrawListeners = () => {
    const sketchContainer = document.querySelector(".container");
    for (const child of sketchContainer.children) {
            child.addEventListener("mouseover", (event) => {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                let newColor = `rgb(${r},${g},${b})`; //make the color a random rgb value on mouseover.
                event.target.style.backgroundColor = newColor;
                event.target.style.color = newColor;
            });
    }
}



//Step 3:

const reset = () => {
    const button = document.querySelector(".reset");
    button.addEventListener("click", () => {
        const sketchBoard = document.querySelector(".container");
        while(sketchBoard.hasChildNodes()) {
            sketchBoard.removeChild(sketchBoard.lastChild);
        }
        let invalid = true;
        let newGridCells = 0;
        while (invalid) {
            newGridCells = Number(prompt("Please enter the number of grid cells you want (up to 100)"));
            if (newGridCells < 1 || newGridCells > 100){
                alert("Please select a number between 1 and 100!");
            } else {
                invalid = false;
            }
        }
        newGridCells = newGridCells * newGridCells; //create the new size for the entire grid
        for (let i = 0; i < newGridCells; i++){
            let newDiv = document.createElement("div");
            newDiv.textContent = "etch-a-sketch";
            sketchBoard.appendChild(newDiv);
        }
        addDrawListeners();
    });
}
setupGrid();
addDrawListeners();
reset();