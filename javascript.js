const grid = document.querySelector("#grid");
const pixels = []
const gridHeight = grid.style.height = "400px";
const gridWidth = grid.style.width = "400px";

let selectedColor = "rgb(255, 0, 0)";
let hoverColor = "rgba(255, 0, 0, 0.2)"


function changeColor() {
    return `rgb(${
    Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
}

const gridChanger = document.querySelector("#change-grid");

gridChanger.addEventListener("click", () => {
    let n;
    while (!(+n)) {
    n = prompt("How many squares? (number only)")
    }
    createGrid(Math.floor(n));
    pixelEvents();
})

let pointerDownInGrid = false;



function removeSuffix(string) {
    const arr = string.split("")
    arr.pop();
    arr.pop();
    return +arr.join("");
}

function createGrid(n) {
    grid.innerHTML = "";
    for (let i = 0; i < n*n; i++) {
        const pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        const height = (removeSuffix(gridHeight)) / n;
        const width = (removeSuffix(gridWidth)) / n;
        pixel.style.height = height + "px";
        pixel.style.width = width + "px";
        grid.appendChild(pixel);
        pixels.push(pixel);
        console.log(pixel.style.height, pixel.style.width)
    }
}

createGrid(16);

function pixelEvents() {
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
            selectedColor = changeColor();
        } else {
            if (pixel.style.backgroundColor !== selectedColor) {
            pixel.style.backgroundColor = hoverColor;
            }
        }

    }
)
    }
)

}

pixelEvents();
