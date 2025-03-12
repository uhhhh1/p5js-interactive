// Array of flowers
let flowers = []; 
// Variable to store background color
let bgColor; 


function setup() {
  createCanvas(900, 700);
  //sets the initial background color to light blue 
  bgColor = color("lightblue");
  
  // Generate 20 flowers.
  for (let i = 0; i < 20; i++) {
    let flower = createFlower(); // creats a flower at a random location
    flowers.push(flower); // adds the flower to the flower array
  }
}

function draw() {
  background(bgColor);

    // checks if the mouse is inside the canvas and creates flowers at its location
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      if (frameCount % 10 === 0) { // Controls how often new flowers appear
        let flower = createFlower(mouseX, mouseY); // creats flower at mouse location
        flowers.push(flower); // adds it to the array
      } 
    }


  updateAndDrawFlowers();
}

function updateAndDrawFlowers() {
  for (let i = flowers.length - 1; i >= 0; i--) {
    let flower = flowers[i];

    // draws the flower.
    drawFlower(flower);

    // applies wilting effect by reducing size by 1%
    flower.size *= 0.99;

    // reduces the flower's lifespan
    flower.lifespan -= 1;
    
    if (flower.lifespan <= 0) {
      // removes the flower 
      flowers.splice(i, 1);
    }
  }
}

// Function to create 20 flowers
function createFlower(x = random(20, 700), y = random(20, 700)) {
  let flower = {
    x: x, // Position 
    y: y,
    size: random(20, 150), // Random size for the flower 
    lifespan: random(255, 300), // Random lifespan for the flower 
    color: color(random(255), random(255), random(255)) // Random color for the flower's petals 
  };

  return flower;
}

function drawFlower(flower) {
  noStroke();
  fill(flower.color);
  
  // Draw petals.
  ellipse(flower.x, flower.y, flower.size / 2, flower.size);
  ellipse(flower.x, flower.y, flower.size, flower.size / 2);

  // Draw center.
  fill(255, 204, 0);
  circle(flower.x, flower.y, flower.size / 2);
  
}

// Function to change background color when the mouse is clicked
function mousePressed() {
  bgColor = color(random(255), random(255), random(255)); // Set random background color
}