class button{
  constructor(buttonX, buttonY, buttonW, buttonH, buttonColor,txtX,txtY,txtColor,buttonTxt){
    this.x = buttonX;
    this.y = buttonY;
    this.w = buttonW;
    this.h = buttonH;
    this.bColor = buttonColor
    this.txtX = this.x + 35
    this.txtY = this.y + 28
    this.tColor = txtColor
    this.txt = buttonTxt
    
  }
  draw_button(){
      push();
  fill(this.bColor);
  rect(this.x,this.y, this.w, this.h);
  fill(this.tColor);
  textAlign(CENTER);
  text(this.txt,this.txtX,this.txtY);
  pop();
  }
  
}

//-------------building the buttons-------------
  let yesButton = new button(215,272,70,40,'green',this.txtX,this.txtY,'black',"yes");

let noButton = new button(315,272,70,40,'red',this.txtX,this.txtY,'black',"no");

let nextButton = new button(200,20,20,20,'blue',20,20,'green',"next")
 //(buttonX, buttonY, buttonW, buttonH, buttonColor,txtX,txtY,txtColor,buttonTxt)



//      push();
//   fill('green');
//   rect(buttonX,buttonY, buttonW, buttonH);
//   fill('black');
//   text("yes",yesX,yesY);
//   pop();
  
  
//   //no
//   push();
//   fill('red');
//   rect(buttonX + 100,buttonY, buttonW, buttonH);
//   fill('black');
//   text("no", yesX + 100, yesY);
//   pop(); 