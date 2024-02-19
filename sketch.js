let rocket;
let rocketImg;

function preload() {
    rocketImg = loadImage('rocket.png');
    }

function setup() {
    createCanvas(windowWidth, windowHeight); // Create a canvas that covers the entire window
    rocket = new Rocket();
    }

function draw() {
    background(220); // Set the background color

     // Update and display the rocket
    rocket.update();
    rocket.display();
    }

class Rocket {
    constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.maxSpeed = 5;
    this.maxForce = 0.1;
    }

    update() {
        let target = createVector(mouseX, mouseY); // Get the cursor position as the target
        let desired = p5.Vector.sub(target, this.position); // Calculate the desired velocity

        let d = desired.mag();
        if (d < 100) {
          // Slow down the rocket as it approaches the cursor
          let m = map(d, 0, 100, 0, this.maxSpeed);
          desired.setMag(m);
        } else {
          desired.setMag(this.maxSpeed);
        }

        let steer = p5.Vector.sub(desired, this.velocity); // Calculate the steering force
        steer.limit(this.maxForce); // Limit the steering force

        this.acceleration.add(steer); // Apply the steering force to acceleration
        this.velocity.add(this.acceleration); // Update velocity
        this.velocity.limit(this.maxSpeed); // Limit velocity
        this.position.add(this.velocity); // Update position
        this.acceleration.mult(0); // Reset acceleration
    }

    display() {
        imageMode(CENTER); // Set the image mode to center
        push();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading() + HALF_PI); // Rotate the rocket towards its velocity
        image(rocketImg, 0, 0, 40, 40); // Draw the rocket image
        pop();
    }
}

