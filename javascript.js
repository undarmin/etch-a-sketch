const grid = document.querySelector("#grid");
const pixels = []
const gridHeight = grid.style.height = "400px";
const gridWidth = grid.style.width = "400px";
let selectedColor = "rgb(255, 0, 0)";
let hoverColor = "rgba(255, 0, 0, 0.2)"

let pointerDownInGrid = false;

grid.addEventListener('mousedown', (e) => {
    pointerDownInGrid = true;
    console.log(pointerDownInGrid);
    if (e.target !== grid) {
        e.target.style.backgroundColor = selectedColor;
    }
})
grid.addEventListener('mouseup', () => {
    pointerDownInGrid = false;
    console.log(pointerDownInGrid);
})

function removeSuffix(string) {
    const arr = string.split("")
    arr.pop();
    arr.pop();
    return +arr.join("");
}

function createGrid() {
    for (let i = 0; i < 16*16; i++) {
        const pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        const height = (removeSuffix(gridHeight)) / 16;
        const width = (removeSuffix(gridWidth)) / 16;
        pixel.style.height = height + "px";
        pixel.style.width = width + "px";
        grid.appendChild(pixel);
        pixels.push(pixel);
        console.log(pixel.style.height, pixel.style.width)
    }
}

createGrid();

pixels.forEach(
    (pixel) => {
        pixel.addEventListener('mouseleave', () => {
            if (pixel.style.backgroundColor === hoverColor) {
            pixel.style.backgroundColor = "transparent"; 
            }
        })
        pixel.addEventListener('mouseenter', () => {
        if (pointerDownInGrid) {
            pixel.style.backgroundColor = selectedColor;
        } else {
            if (pixel.style.backgroundColor !== selectedColor) {
            pixel.style.backgroundColor = hoverColor;
            }
        }

    }
)
    }
)

