let headX, headY, neckX, neckY, bodyX, bodyY;
let armLX, armLY, armRX, armRY, legLX, legLY, legRX, legRY;
let footLX, footLY, footRX, footRY;
let m, h, s, ms, date1, date2, date3;
let timeNow;
let fr_rate;
let pd;
let today;
let index = 0
let index2 = 0

days = ['thursday 1','friday','saturday','sunday','monday','tuesday','wednesday','thursday 2']

txtsNum = [15,0,1,0,3,25,8,7]


//x = space aka "time"
let x;

//d = distance (geographical)
let d;

//t = time passed since you last saw them (min)
let t;

//t2 = time until you'll see them again (min)
let t2;

//c = amount of time you spent communicating with them since then (min)
let c;

//txts = txts youve sent to someone
let txts;


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
  
  if (txtsNum[index2] < 25)
    {
      background('rgb(255,231,246)');
    }
  else
    {
      background('rgb(250,67,152)');
    }
  
  //marker lrgb(248,120,142)
  
  for(let a = 45; a<=550; a += (550-45)/25){
    push();
    stroke('rgb(250,176,188)');
    line(a,0,a,600);
    pop();
    
  
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
  
  // m = minute();
  // h = hour();
  // s = second();
  // ms = second()/1000;
  

  //EDIT THESE VARIABLES (INPUT)
  //d = 1008 //physical distance - NOT USING
  //txts = 5 // texts sent 
  
  
  //t = map(minsSince, 0, timeKnown, 45, 550)
  t = map(25-txtsNum[index2], 0, 25, 45, 550);
  
  x = t //- c2/3
  
  
  
  
  
  push();
  textSize((txtsNum[index2]+3)*2)
  textAlign(CENTER);
  fill('rgb(123,20,35)')
  text(days[index], 300,150)
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
  
    
    
  }

  
  
  
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



function mousePressed() {
  
  if(index < days.length - 1 ){
    index = index + 1;
  }
  else
  {
    index = 0;
  }
  
  
  
  if(index2 < txtsNum.length - 1){
    index2 = index2 + 1;
  }
  else
    {
      index2 = 0;
    }
}