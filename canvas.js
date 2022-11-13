import {randomInt, randomColor, distance } from "./utils.js";
import Node from "./node.js";

const canvas = document.querySelector('canvas'); // canvas object from HTML
const c = canvas.getContext('2d'); // this provides the actual context/area for the canvas

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


// Implementation
let node1;
let node2;
function init() {
  node1 = new Node(300, 300, 100, "black", c);
  node2 = new Node(undefined, undefined, 30, "red", c);

}


// Animation Loop
function animate() {
  requestAnimationFrame(animate) // Calls itself to frequently animate the canvas
  c.clearRect(0, 0, canvas.width, canvas.height) // Resets the canvas for the next animation

  node1.draw();
  node2.x = mouse.x;
  node2.y = mouse.y;
  node2.draw();
}

init();
animate();
