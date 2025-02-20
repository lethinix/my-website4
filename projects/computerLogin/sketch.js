var scene1 = true
var scene2 = false
var scene3 = false
var scene4 = false
let color2 = '#77512B'

// -----------SCENE1 VARIABLES----------------
let room,screen;
let headX, headY, neckX, neckY, bodyX, bodyY;
let armLX, armLY, armRX, armRY, legLX, legLY, legRX, legRY;
let footLX, footLY, footRX, footRY;
let skin;
let sH, sW;

//----------------SCENE2 VARIABLES-------------//
let loserH, loserW;

let myInput, myAnswer, counter=0, score=0, submitButton;

let questions = [
    "would you like to log in?",
    "great :) i will ask you some questions \n and you have to answer them",
    "okay?",
    "who was the first president \n of the us?",
    "what country do you \n live in?",
    "what state do you \n live in?",
    "what city do you \n live in?",
    "what school do you go to?",
    "what color \n is your hair?",
    "what burough do you live in?",
    "what is the name \n of your first dog?",
    "what is your mother's \n maiden name?",
    "what is your name?",
    "what is your last name?",
    "what will you be when you're 45?"    
     
  ]
  
  let index = 0
  
let answers = [
    "would you like to log in?",
    "great :) i will ask you some questions \n and you have to answer them",
    "okay?",
    "george washington",
    "united states",
    "new york",
    "new york city",
    "parsons",
    "brown",
    "brooklyn",
    "sarah",
    "jones",
    "aisha",
    "kazembe",
    "45"   
       
  ]


//----------------SCENE3 VARIABLES-------------//
let speed,xLoc;
var meDirectionX = 1;
var meDirectionY = 1;
var meSpeed = 10;
var headX2 = 150
var headY2 = 100







function preload(){
  //ROOM
  room = loadImage('/pics/gameRoom.jpg');
  screen = loadImage('/pics/logIn.jpg');
  
  //QUIZ
  computerScreen = loadImage('/pics/computerScreen.jpg');
  
  //STUCK IN SCREEN
   computerScreenZoom = loadImage('/pics/computerScreenZoom.jpg');
}

function setup() {
  createCanvas(600, 400);
// -----------ROOM SETUP----------------
  
//----------------QUIZ SETUP-------------//
  frameRate(10);
  
  myInput = createInput ();
  myInput.position(225,375);

  
//----------------STUCK IN SCREEN SETUP-------------//
  
  
}

function draw() {
  

if(scene1 == true){
  
  drawScene1();
  
  push();
  fill(color2);
  circle(10,10,5);
  pop(); 
}

  
  
 if(scene2 == true){
  drawScene2(); 
   
//   if(315 <= mouseX && mouseX <= 385 && 272<= mouseY && mouseY <= 312 && 0<= index && index <= 2){
    
//     scene1 = true;
//     drawScene1();
//     textAlign(CENTER);
//     text("okay we're done", 20, 30)
//   }
  
 } 
  

if(scene3 == true){
 drawScene3(); 
  
}




}
//end draw 




//-------------SCENE 1 - ROOM FUNCTIONS---------------
function drawScene1(){
  
  image(room,1,1,600,400);
  
  //computer screen
  
  sW = 47
  sH = 30
  
  push();
 
  translate(370,144);
  rotate(PI/25);
  //rect(0,0,sW,sH)
  image(screen, 0, 0, sW,sH);
  
  noStroke()
  fill('#FFFFFF');
  rect(9,7, 27, 10)
  
  push();
  //rotate(random(PI/25 + (1/25), PI/25 - (2/25)));
  textSize(random(10,12));
  textAlign(CENTER);
  fill('black');
  text("LOG IN", 22, 17);
  pop();
  
  pop();
  
  
  //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY)

  
//character
  
drawMe();
  


}





//----------------SCENE 2 - QUIZ FUNCTIONS-------------//



function drawScene2(){
  
  background('#ECE2B8')
  //screen
  rect(50,50,500,300)
  image(computerScreen,1,1,width,height);
  
    
  push();
  textAlign(CENTER);
  textSize(20);
  text(questions[index], 300, 180);
  myAnswer = myInput.value();
  pop();
  
  if(index > 2){
 
  submitButton= createButton("Submit Answer");
   submitButton.size(120,20)
   submitButton.position(380,375);
   submitButton.mousePressed(submitAnswer);
   
   //clear();
  push();
  textSize(20);
  textAlign(CENTER);
  fill('green')
  text("score: " + score,300,100)
  pop();

    
  }
  
//when buttons appear
   if ( 0<= index && index <= 2)
    {  
//draw buttons
  yesButton.draw_button();
  noButton.draw_button();
    }
  
 else 
 { 
   
  push();
  textSize(30);
  textAlign(CENTER);
  fill('blue');
  let myAnswer = myInput.value();
  text(myAnswer, 300, 250);
  pop();
 }  
  
 
  
//text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY)
 
}


function submitAnswer(){
  if(myAnswer == answers[index] && index < questions.length){
    score+=1;
    index+=1;
  } else if (myAnswer == answers[index] && index == questions.length){
    scene4 = true  
  } 
  else{
    scene3 = true
  }
}


function loser(loserH = 10,loserW = 10){
  ///need to create the scene of the person getting eaten by the computer
  
  //rect(20,30,loserH,loserW)
  textSize(20);
  textAlign(CENTER); 
  text("uh oh...", 300,250);
  textSize(40);
  text("you are not aisha.", 300,250);
  text("uh oh...", 300,250)

}




//----------------SCENE 3 FUNCTIONS-------------//

function drawScene3(){
  
  image(computerScreenZoom, 1,1,width, height);
  
  
  // if(scene2 == true && 2<= index && myAnswer != answers[index]){
  //   image(computerScreen,1,1,width,height);
  //   push();
  //   fill('red');
  //   textSize(12);
  //   text("uh oh...\ you answered this security question wrong.\ it seems like you\are not aisha.", 300, 180);
  //   pop();
  // }   
  
  
 push();
  textAlign(CENTER);
  fill('red');
  textSize(10);
  text("SECURITY CODE 212 SYSTEM HACK ATTEMPT : FAILED", 300,120);
  textSize(15);
  text("uh oh... you answered this security question wrong...", 300, 160);
  textStyle(BOLD);
  text("it seems like you are not me.", 300, 200);
  text("you have been CAPTCHA'D. now you're stuck here forever.", 300, 220);
  pop();  
    
    
 if(mouseX < 560 && mouseX > 50 ){
     
 //character
  headX2 = headX2 + (meDirectionX*meSpeed);
  headY2 = headX2 + (meDirectionY*meSpeed);
  neckX = headX2 - 2
  neckY = headY2 + 20
  bodyX = headX2 - 15
  bodyY = headY2 + 30
  legLX = bodyX
  legLY = bodyY + 40
  legRX = bodyX + 15
  legRY = legLY
  armLX = bodyX
  armLY = bodyY + 20
  armRX = bodyX + 30
  armRY = armLY
  footLX = legLX + 6
  footLY = legLY + 27
  footRX = legRX + 7
  footRY = legRY + 27
  skin = ('rgb(199,156,124)');
  
  //back of hair
  push()
  noStroke();
  fill('rgb(49,27,27)')
  rect(headX2-25,headY2-7,40,80);
  pop();
  
  
  //neck
  push();
  fill(skin);
  rect(neckX, neckY, 6, 10);
   
  //head
  circle(headX2,headY2,45);
 
  //body
  pop();
  
  push();
  fill('rgb(241,227,252)');
  rect(bodyX, bodyY,30, 40);
  pop();
  
  push();
  fill('blue');
  //l leg
  rect(legLX, legLY,15,27);
  //r leg
  rect(legRX, legRY, 15, 27);
  pop();
  
  
 
  
  //feet
  circle(footLX, footLY, 5);
  circle(footRX, footRY, 5);
  
  //face
  
  //eyes
  
  
  circle(headX2-8,headY2,10)
  circle(headX2+8,headY2,10)
    
  //color
  push();
  noStroke();
  fill('rgb(248,28,28)')
  circle(headX2-8,headY2-1,7)
  circle(headX2+8,headY2-1,7)
  pop();
  //pupils
  push();
  fill('rgb(223,245,28)');
  circle(headX2-8,headY2-1,4);
  circle(headX2+8,headY2-1,4);
  pop();
  
  //shine
  push();
  noStroke();
  fill('white');
  circle(headX2-7,headY2-2,1.5);
  circle(headX2+9,headY2-2,1.5);
  pop();
  
  
  //brows
  
  ellipse(headX2-8,headY2-8,4,.5);
  push();
  noStroke();
  fill(skin);
  rect(headX2-3,headY2+7.9,6,2)
  pop();
  
    
  ellipse(headX2+7,headY2-8,4,.5);
  push();
  noStroke();
  fill(skin);
  rect(headX2-3,headY2+7.9,6,2)
  pop();
  
  //mouth
  push();
  
  fill('black');
  line(headX2 - 3, headY2 + 13, headX2 +3, headY2 + 13)
  //circle(headX,headY+13,2)
  pop();
   
  //nose
  ellipse(headX2,headY2+8,4,1);
  push();
  noStroke();
  fill(skin);
  rect(headX2-3,headY2+7.9,6,2)
  pop();

  
  //hair  
  push();
  noStroke();
  fill('rgb(49,27,27)')
  rect(headX2-25,headY2-7,10,80);
  rect(headX2+15,headY2-7,10,80);
  
  push();
  translate(headX2-12,headY2-15);
  rotate(PI/1.25)
  ellipse(0,0,30,15);
  pop();
  
  push();
  translate(headX2+12,headY2-15);
  rotate(-PI/1.25)
  ellipse(0,0,30,15);
  pop();
  pop();
  
   //arms
  push();
  fill(skin);
  //l arm
  ellipse(armLX, armLY, 7, 35);
  //r arm
  ellipse(armRX, armRY, 7, 35);
  pop();
  
   
  //FLOATING
  
  if(headX2 < 100 && headY2 < 67){
    meDirectionX = meDirectionX*-1;
    meDirectionY = meDirectionY*-1;
  }
  else if(headX2 > 500 || headY2 > 250){
    meDirectionX = meDirectionX*-(0.8);
    meDirectionY = meDirectionY*-(0.6);
  }

  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY) 
     
 } 
 //end if 

  
  
  
  
}
//end drawScene3


function drawScene4(){
  background('green');
  text("congratulations.. you won", 300, 200);
  
  
}



//----------------MOUSE PRESSED FUNCTIONS---------


function mousePressed(){

  //-------------SCENE 1---------------
  
 if ( 371 <= mouseX && mouseX <= 412 && 145 <= mouseY && mouseY <= 178 && scene1 == true){
  color2 = 'red'
  scene2 = true  
  }
  else{
    color2 = '#8BC34A';
  } 
 
  
//------------#8BC34ANE 2--------------- 
  
  if(215 <= mouseX && mouseX <= 285 && 272<= mouseY && mouseY <= 312 && 0<= index && index <= 2 && scene2 == true){
    
    if(index < questions.length){
    index = index + 1;
    }
    
    else{
      if(scene2 == true){
    index = 0
      }
    }
    
  }
  
  if(315 <= mouseX && mouseX <= 385 && 272<= mouseY && mouseY <= 312 && 0<= index && index <= 2 && scene2 == true){
    
    scene1 = true;
    drawScene1();
    textAlign(CENTER);
    text("okay we're done", 20, 30)
   
    
  }
  
  if(index > questions.length){
    scene4 = true
    }
  
   //push();
    //clear();
    //text("okay :) you may go back to your room", 300,250);
    // fill('black');
    // rect(0,0,600,400);
    //pop();

  
}
//end mousePressed







function drawMe(){
  //character
  
  headX = mouseX - 40
  headY = mouseY - 40
  neckX = headX - 2
  neckY = headY + 20
  bodyX = headX - 15
  bodyY = headY + 30
  legLX = bodyX
  legLY = bodyY + 40
  legRX = bodyX + 15
  legRY = legLY
  armLX = bodyX
  armLY = bodyY + 20
  armRX = bodyX + 30
  armRY = armLY
  footLX = legLX + 6
  footLY = legLY + 27
  footRX = legRX + 7
  footRY = legRY + 27
  skin = ('rgb(199,156,124)');
  
  //back of hair
  push()
  noStroke();
  fill('rgb(49,27,27)')
  rect(headX-25,headY-7,40,80);
  pop();
  
  //neck
  push();
  fill(skin);
  rect(neckX, neckY, 6, 10);
   //head
  circle(headX,headY,45);
  //body
  pop();
  
  push();
  fill('rgb(241,227,252)');
  rect(bodyX, bodyY,30, 40);
  pop();
  
  push();
  fill('blue');
  //l leg
  rect(legLX, legLY,15,27);
  //r leg
  rect(legRX, legRY, 15, 27);
  pop();
  
  //feet
  circle(footLX, footLY, 5);
  circle(footRX, footRY, 5);
  
  //face
  
  //eyes
  circle(headX-8,headY,10)
  circle(headX+8,headY,10)
  //color
  push();
  noStroke();
  fill('rgb(154,37,37)')
  circle(headX-8,headY-1,7)
  circle(headX+8,headY-1,7)
  pop();
  
  //pupils
  push();
  fill('black');
  circle(headX-8,headY-2,4);
  circle(headX+8,headY-2,4);
  pop();
  
  //shine
  push();
  noStroke();
  fill('white');
  circle(headX-7,headY-2,1.5);
  circle(headX+9,headY-2,1.5);
  pop();
  
  //brows
  ellipse(headX-8,headY-8,4,.5);
  push();
  noStroke();
  fill(skin);
  rect(headX-3,headY+7.9,6,2)
  pop();
   
  ellipse(headX+7,headY-8,4,.5);
  push();
  noStroke();
  fill(skin);
  rect(headX-3,headY+7.9,6,2)
  pop();
  
  //mouth
  push();
  
  fill('black');
  circle(headX,headY+11,7)
  pop();
  
  push();
  noStroke();
  fill(skin);
  translate(headX+4.4,headY+12);
  rotate(PI/1.09)
  rect(0,0,9,5.5);
  pop();
  
  //nose
  ellipse(headX,headY+8,4,1);
  push();
  noStroke();
  fill(skin);
  rect(headX-3,headY+7.9,6,2)
  pop();

  //hair
  push();
  noStroke();
  fill('rgb(49,27,27)')
  rect(headX-25,headY-7,10,80);
  rect(headX+15,headY-7,10,80);
  
  push();
  translate(headX-12,headY-15);
  rotate(PI/1.25)
  ellipse(0,0,30,15);
  pop();
  
  push();
  translate(headX+12,headY-15);
  rotate(-PI/1.25)
  ellipse(0,0,30,15);
  pop();
  pop();
  
   //arms
  push();
  fill(skin);
  //l arm
  ellipse(armLX, armLY, 7, 35);
  //r arm
  ellipse(armRX, armRY, 7, 35);
  pop(); 
}

