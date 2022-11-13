// TODO: Use a binary search tree for the nodes array, for better searching

/////////// IMPORT STATEMENTS ////////////////
import Nodes from "./nodes.js";

////////// DEFINE VARIABLES /////////////////
const canvas = document.querySelector('canvas'); // canvas object from HTML
const context = canvas.getContext('2d'); // this provides the actual context/area for the canvas

canvas.width = innerWidth; // innerWidth is the width of the browser of the window viewport (area being currently viewed)
canvas.height = innerHeight; // innerHeight is the height of the browser of the window viewport (area being currently viewed)

const mouse = { // initializes mouse's position in the center of the screen
  x: innerWidth / 2,
  y: innerHeight / 2
};

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

// Event Listeners
addEventListener('mousemove', (event) => { // updates the mouse's x/y coordinates
  mouse.x = event.clientX;
  mouse.y = event.clientY;
})

addEventListener('resize', () => { // updates the canvas's screen when the browser is resized
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  // init() //   <--- Potentially uncomment this
})


/////////////////// BEGIN IMPLEMENTATION ///////////////////
let nodes = new Nodes(10, context, 150, "blue"); 
    // Create 10 nodes, use main context, set radius = 150px, set each node to "blue"
function init() {
    nodes.spawnNodes();
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate) // Calls itself to frequently animate the canvas
    context.clearRect(0, 0, canvas.width, canvas.height) // Resets the canvas for the next animation
    nodes.updateNodes(); // re-renders nodes
}

///////////////// START EXECUTION ////////////////////
init();
animate();
