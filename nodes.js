import {randomInt, randomColor, distance, isCollided, rotate, resolveCollision} from "./utils.js";
import Node from "./node.js";

export default class Nodes {
    constructor(numNodes, context, radius, color) {
        this.numNodes = numNodes;
        this.context = context;
        this.radius = radius;
        this.color = color;
        this.nodes = [];
    }

    spawnNodes() {
        for (let i = 0; i < this.numNodes; i++) {
            // To create a random node, create random node coordinates
            let x = randomInt(this.radius, innerWidth - this.radius); // guarantees to spawn strictly inside canvas
            let y = randomInt(this.radius, innerHeight - this.radius); // guarantees to spawn strictly inside canvas
    
            // If node is spawned on another node, re-create random coordinates
            for (let j = 0; j < this.nodes.length; j++) {
                let dist = distance(x, y, this.nodes[j].x, this.nodes[j].y);
                if (isCollided(dist, this.radius)){
                    x = randomInt(this.radius, innerWidth - this.radius);// guarantees to spawn strictly inside canvas
                    y = randomInt(this.radius, innerHeight - this.radius); // guarantees to spawn strictly inside canvas
                    j = -1; // reset for loop to check all nodes again
                }
            }
    
            this.nodes.push(new Node(x, y, this.radius, this.color, this.context));
            
        }
    }

    updateNodes() {
        this.nodes.forEach(node => {
            
            // Check node if it collided with some other node
            for (let i = 0; i < this.numNodes; i++) {

                if (node == this.nodes[i]) continue; // Impossible for node to collide with itself

                let dist = distance(node.x, node.y, this.nodes[i].x, this.nodes[i].y); // Get distance between node and another node
                if (isCollided(dist, this.radius)) { // If node collided with another node
                    resolveCollision(node, this.nodes[i]);
                }
            }

            // Re-render node
            node.update();
        })
    }
}