let a = 0;
let nR, nG, nB;
// let r, g, b;


function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(600, 600);

  // background(0);
  nR = random(1000);
  nG = random(1000);
  nB = random(1000);
}




function draw() {
  
  let r = map(noise(nR), 0, 1, 0, 25);
  let g = map(noise(nG), 0, 1, 0, 125);
  let b = map(noise(nB), 0, 1, 0, 125);

  background(r, g, b);
  stroke(nR/2.55, nG/2.55, nB/2.55);
  
  for (let x = 260; x < 340; x+= 20) {
    let s = map(sin(a + x), -1, 1, 0, 20);
    strokeWeight(s);
   
    point(x, height/2);
    a += 0.03 // speed
  }
}
