function setup() {
  createCanvas(400, 400);
  angleMode('degrees');
}

function draw() {
  background('rgb(212,222,223)');
  
  //spinning top from side view
  
  //table
  push();
  blendMode(EXCLUSION);
  fill('rgb(117,19,46)');

  rect(50,199.3,5,40);
  rect(145,198.3,5,40); 
  quad(50,198.3,150, 198.3,170,220,30,220);
  rect(30,220,5,40);
  rect(165,220,5,40);
  pop();
  push();
  
  //top section of the top, with ridges for winding string
  fill('rgb(243,240,206)');
  rect(50,133.3,100,5);
  rect(50,138.3,100,5);
  rect(50,143.3,100,5);
  rect(50,148.3,100,5);
  
  //curved sides
  push();
  translate(75.02,178.3);
  rotate(133);
  ellipse(-1, 1,7,68.03);
  pop();
  
  push();
  translate(124.08,178.3);
  rotate(-132.5);
  ellipse(1, 1,7,68.03);
  pop();
  
  //top knob
  rect(98,113,3,20);
  
  
  //base of top
  push();
  noStroke();
  triangle(50,153.3,150,153.3,100,198.3);
  pop(); 
  
  //spindle
  rect(99,198.3,2,10);
 
  pop();
  
  //spinning top from top view
  
  fill('black');
  circle(300,170,100);
  
  fill('beige');
  circle(300,170,90);
  
  fill('red');
  circle(300,170,80);
  
  fill('beige');
  circle(300,170,70);
  
  fill('black');
  circle(300,170,60);
  
  fill('beige');
  circle(300,170,50);
  
  fill('red');
  circle(300,170,40);
  
  fill('beige');
  circle(300,170,30);
  
  fill('black');
  circle(300,170,20);
  
  fill('beige');
  circle(300,170,10);
  
  
  
}