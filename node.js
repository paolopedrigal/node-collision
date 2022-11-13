export default class Node {
    constructor(x, y, radius, color, context) {
      this.x = x;
      this.y = y;
      this.velocity = {
        x: Math.random() * 5, 
        y: Math.random() * 5,
      };
      this.radius = radius;
      this.color = color;
      this.mass = 1; // elasitc collision
      this.context = context;
    }
  
    draw() {
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      this.context.strokeStyle = this.color;
      this.context.stroke();
      this.context.font = "75px serif";
      this.context.textBaseline = "middle";
      this.context.textAlign = "center";
      this.context.fillText("Test", this.x, this.y);
      this.context.closePath();
    }

    moveX() {
        this.x += this.velocity.x;
    }

    moveY() {
        this.y += this.velocity.y;
    }

    update() {
        this.draw();

        // If node touches the right side of the screen or left side of the screen
        if (this.x + this.radius >= innerWidth || this.x - this.radius <= 0) {
            this.velocity.x = -this.velocity.x; // reverse direction along x-axis
        }

        // If node is touches the top side or the bottom side of the screen 
        if (this.y + this.radius >= innerHeight || this.y - this.radius <= 0) {
            this.velocity.y = -this.velocity.y; // reverse direction along x-axis
        }

        this.moveX();
        this.moveY();
    }
}
