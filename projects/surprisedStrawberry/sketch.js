let sketch = function(p) {
  let eyeD, eyeD2, mouthW, browH, tilt, tilt2;
  let r, g, b;
  let rf, gf, bf;
  let rb, gb, bb;
  let ts;

  p.setup = function() {
      let canvas = p.createCanvas(400, 400);
      canvas.parent('popup-media'); // Attach to the pop-up container
  };

  p.draw = function() {
      p.background(rb, gb, bb);
      
      // Strawberry body
      p.fill(r, g, b);
      p.stroke(r, g, b);
      
      // Curved sides
      p.stroke('black');
      p.push();
      p.translate(150, 225);
      p.rotate(1);
      p.ellipse(0, 0, 190, 20);
      p.pop();

      p.push();
      p.translate(250, 225);
      p.rotate(-1);
      p.ellipse(0, 0, 190, 20);
      p.pop();

      p.ellipse(200, 146, 203, 20);
      p.push();
      p.noStroke();
      p.triangle(99, 147, 301, 147, 198, 303);
      p.pop();
      
      // Hair (top green triangles)
      p.fill('rgb(169,241,189)');
      p.stroke('green');
      p.triangle(130, 100, 190, 150, 150, 150);
      p.triangle(170, 150, 230, 150, 200, 90);
      p.triangle(210, 150, 250, 150, 270, 100);

      // Remove stroke for facial features
      p.noStroke();
      
      // Eyes
      eyeD = p.mouseX / 20;
      eyeD2 = p.mouseX / 30;
      p.fill('white');
      p.circle(170, 190, eyeD);
      p.circle(230, 190, eyeD);
      p.fill('black');
      p.circle(170, 190, eyeD2);
      p.circle(230, 190, eyeD2);

      // Nose (no stroke)
      p.fill(r, g, b);
      p.ellipse(200, 210, 15, 10);
      p.quad(190, 199, 210, 199, 210, 214, 190, 214);

      // Mouth (still black)
      mouthW = p.mouseY / 15;
      p.fill('black');
      p.ellipse(200, 240, 25, mouthW);

      // Eyebrows (restore stroke for these)
      p.strokeWeight(1);
      p.stroke('rgb(39,104,57)');
      p.fill('rgb(169,241,189)');
      
      browH = p.mouseY / 28;
      p.push();
      p.translate(170, 175 - browH);
      p.rotate(-p.PI / tilt);
      p.arc(0, 0, 10, 15, -1.04, 1.04, p.CHORD);
      p.pop();

      p.push();
      p.translate(230, 175 - browH);
      p.rotate(-p.PI / tilt2);
      p.arc(0, 0, 10, 15, -1.04, 1.04, p.CHORD);
      p.pop();

      // Blush (no stroke)
      p.noStroke();
      p.fill(rf, gf, bf);
      p.circle(168, 210, 3);
      p.circle(164, 207, 3);
      p.circle(172, 207, 3);
      p.circle(232, 210, 3);
      p.circle(228, 207, 3);
      p.circle(236, 207, 3);

      // Text
      p.fill(rf, gf, bf);
      ts = 20 + p.mouseY / 5;
      p.textSize(ts);
      p.text('surprised strawberry', 20, 30);
  };

  p.mouseClicked = function() {
      r = p.random(200, 255);
      g = p.random(0, 255);
      b = p.random(0, 210);
      tilt = p.random(1.5, 2);
      tilt2 = p.random(1, 1.7);
      rb = p.random(200, 255);
      gb = p.random(0, 255);
      bb = p.random(200, 255);
  };

  p.mousePressed = function() {
      rf = p.random(0, 255);
      gf = p.random(0, 255);
      bf = p.random(0, 255);
  };
};
