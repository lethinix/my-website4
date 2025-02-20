let loserH, loserW;

let myInput, myAnswer, counter=0, score=0, submitButton;

let questions = [
    "would you like to play a game?",
    "great :) i will ask you some questions \n and you have to answer them",
    "okay?",
    "first question/who was the first president \n of the us?",
    "what country do you \n live in?",
    "what state do you \n live in?",
    "what city do you \n live in?",
    "what school doyou go to?",
    "what color \n is your hair?",
    "what is your gender?",
    "what is the name \n of your first dog?",
    "what is your mother's \n maiden name?",
    "",
    "",
    "",    
    "",  
    "",    
    "",    
    "",   
    
    
  ]
  
  let index = 0
  
let answers = [
    "would you like to play a game?",
    "great :) i will ask you some questions \n and you have to answer them",
    "okay?",
    "george washington",
    "United states",
    "new york",
    "new york city",
    "parsons",
    "brown",
    "female",
    "sarah",
    "jones",
    "",
    "",
    "",    
    "",  
    "",    
    "",    
    "",   
    
    
  ]





function preload(){
  computerScreen = loadImage('/pics/computerScreen.jpg');
}


function setup() {
  createCanvas(600, 400);
  frameRate(10);
  
  myInput = createInput ();
  myInput.position(225,375)
  
}

function draw() {
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
   textSize(20);
   //fill(0)
   text(score,10,20)
    
//     if(msg == index2){
      
//       //nextButton.draw_button();
      
//     }
    
  }
  
  
  
  
//-------------when buttons appear-------------


   if ( 0<= index && index <= 2)
    {
      
//draw buttons
  yesButton.draw_button();
  noButton.draw_button();
  //mousePressed();
  
      
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
  
  //------------------
  
//mouseClicked(mouseClickedTest);
  
    text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY)
  
}



  
  

  
  
//-----------------NEW FUNCTION---------------------------



function mousePressed(){
  //<= 320 && 250< mouseY< 290
  
  if(215 <= mouseX && mouseX <= 285 && 272<= mouseY && mouseY <= 312 && 0<= index && index <= 2){
    
    if(index < questions.length){
    index = index + 1;
    }
    
    else{
    index = 0
    }
    
  }
  
  else if(315 <= mouseX && mouseX <= 485 && 272<= mouseY && mouseY <= 312 && 0<= index && index <= 2) {
    
    push();
    clear();
    text("okay :) you may go back to your room", 300,250);
    // fill('black');
    // rect(0,0,600,400);
    pop();
    
  }
  
  else{
    textAlign(CENTER);
    text("okay we're done", 20, 30)
  }
  
  if ( 0 <= mouseX && mouseX <= 100){
      rect( 10,10,10,10);
  

    }
  
}

//-----------------NEW FUNCTION---------------------------


function submitAnswer(){
  if(myAnswer == answers[index]){
    score+=1;
  }
  if(index < questions.length){
    index+=1;
  }
  
}

//-----------------NEW FUNCTION---------------------------

function loser(loserH = 10,loserW = 10){
  ///need to create the scene of the person getting eaten by the computer
  
  //rect(20,30,loserH,loserW)
  textSize(20);
  textAlign(CENTER); 
  text("uh oh...", 300,250);
  textSize(40);
  text("you are not aisha.", 300,250);
  text("uh oh...", 300,250)
  //screen turns red - use blendMode exclusion
  //how do i make the character appear and flash (red?), then change to screen 
  
  
  
}

 function mouseClickedTest(){
    if ( 0 <= mouseX && mouseX <= 100){
      rect(10,10,10,10);
  
    }
  }
  