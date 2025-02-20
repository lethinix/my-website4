let headX, headY, neckX, neckY, bodyX, bodyY;
let armLX, armLY, armRX, armRY, legLX, legLY, legRX, legRY;
let footLX, footLY, footRX, footRY;
let m, h, s, ms, date1, date2, date3;
let timeNow;
let fr_rate;
let pd;
let today;


//x = space aka "time"
let x;

//d = distance (geographical) - not currently using
let d;

//t = time passed since you last saw them (min)
let t;

//t2 = time until you'll see them again (min) - not currently using
let t2;

//c = amount of time you spent communicating with them since then (min)
let c;

//hrs = hrs you've spent communicating with someone
let hrs;


function setup() {
  createCanvas(600, 600);
  
  
  
  
}

function draw() {
  background('rgb(221,227,247)');

  
  
  //variables
  today = new Date(); //today/now
  dateSeen = new Date("2005/02/25") //date since you've seen person
  diff = today - dateSeen; //difference in milliseconds
  minsSince = (diff/1000)/60//60/24/365
  //console.log(minsSince + " minsSince");
dateSee = new Date("2024/12/25") // date when you will see person
  diff2 = dateSee - today; //difference in milliseconds
  minsTill = (diff2/1000)/60;
  //console.log(minsTill + " minsTill");
  
  birth = new Date("2000/03/16") //my birthday - could be used to compare a time to the amount of time i've had in my life
  age = today - birth
  minsAge = (age/1000)/60//60/24/365
  //console.log(minsAge + " minsAge");
  
  timeMet = new Date("2002/02/25")
  diff3 = today - timeMet //in milliseconds
  timeKnown = diff3/1000/60//60/24/365
  //console.log(timeKnown + " timeKnown");
  
  
  

    
  //if statement - background turns blue if in the time you've known them, youve spent more time away from them than with them
  
  if (timeKnown - minsSince < minsSince)
    {
      background('rgb(93,93,243)');
    }
  
  
  //person 1 varriables
  headX = 20
  headY = 400
  neckX = headX - 2
  neckY = headY + 7
  bodyX = headX - 7
  bodyY = headY + 11
  legLX = bodyX
  legLY = bodyY + 20
  legRX = bodyX + 7
  legRY = legLY
  armLX = bodyX
  armLY = bodyY + 14
  armRX = bodyX + 15
  armRY = armLY
  footLX = legLX + 3
  footLY = legLY + 27
  footRX = legRX + 4
  footRY = legRY + 27
  
  
  //person 1
  
  //head
  circle(headX,headY,15);
  //neck
  rect(neckX, neckY, 4, 4);
  //body
  rect(bodyX, bodyY,15, 20);
  //l leg
  rect(legLX, legLY,7,27);
  //r leg
  rect(legRX, legRY, 7, 27);
  //l arm
  ellipse(armLX, armLY, 4, 28);
  //r arm
  ellipse(armRX, armRY, 4, 28);
  //feet
  circle(footLX, footLY, 5);
  circle(footRX, footRY, 5);
  
  //space
  
  //space varriables
  
  m = minute();
  h = hour();
  s = second();
  ms = second()/1000;
  

  //EDIT THESE VARIABLES (INPUT)
  d = 1008 //physical distance - not currently using
  hrs = 5 // hrs spent communicating distantly
  
  
  t = map(minsSince, 0, timeKnown, 45, 560)
  t2 = minsTill
  c = hrs * 60 //minutes spent communicating distantly since time last seen
  c2 = map(c, 0, timeKnown, 45, 560) //- 45
  x = t - c2/3
  //print(c2 + " c2");
  //print(t + " t");
  //console.log(x);
  
  
  
  
//TIME DISPLAY
  push();
  frameRate(1);
  timeNow = (minsSince - c/3)//60/24/365
  textSize(20);
  //textStyle(ITALIC);
  textAlign(CENTER);
  strokeWeight(2);
  stroke(2);
  fill('rgb(223,239,249)');
  text(timeNow + " minutes", 300, 250);
  pop();
  
  push();
  textSize(t/5)
  textAlign(CENTER);
  fill('rgb(247,234,236)')
  text("time between", 300,150)
  pop();
  
  
  
  
  
//distance line

  line(45, 425, x, 425);
  
  push();
  fill('rgb(12,252,12)');
  circle(45,425,6);
  pop();
  
  push();
  fill('rgb(245,52,52)');
  circle(550, 425, 6);
  pop();
  
  push();
  fill('rgb(119,185,243)');
  circle(x,425,6);
  pop();
  
  
//person 2
  
  pd = 5
  
  //head
  circle(headX + (x + pd),headY,15);
  //neck
  rect(neckX + (x + pd), neckY, 4, 4);
  //body
  rect(bodyX + (x + pd), bodyY,15, 20);
  //l leg
  rect(legLX + (x + pd), legLY,7,27);
  //r leg
  rect(legRX + (x + pd), legRY, 7, 27);
  //l arm
  ellipse(armLX + (x + pd), armLY, 4, 28);
  //r arm
  ellipse(armRX + (x + pd), armRY, 4, 28);
  //feet
  circle(footLX + (x + pd), footLY, 5);
  circle(footRX + (x + pd), footRY, 5);
  

  
  
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY)
}


  

