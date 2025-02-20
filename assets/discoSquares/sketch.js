let w, h;
let r, b, g;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background('rgb(243,7,49)');
  background('rgb(0,0,0)');
}

function draw() {
  
  if(mouseX>=1 && mouseX<=370 && mouseY>=20 && mouseY<=80 || mouseY>=260 && mouseY<530 || mouseX>=windowWidth*.01 && mouseX<=windowWidth*.25 && mouseY>=windowHeight*.85 && mouseY<=windowHeight*.95){
    w=30;
    r = random(0,50);
    g = random(0, 50);
    b = random(0, 50);
    fill(r, g, b);
    square(mouseX,mouseY,w);
  } else{
  w=30;
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  fill(r, g, b);
  square(mouseX,mouseY,w);
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}