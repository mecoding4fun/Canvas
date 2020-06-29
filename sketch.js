function setup() {
  createCanvas(700, 400);
  c = color("red");
}

function draw() {
  textSize(30);
  text("Drag the mouse to draw", 200,30);
  if (mouseIsPressed === true) {
    stroke(c);
    strokeWeight(4);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyPressed(){
  if(keyCode===32){
    strokeWeight(7);
    c = color("green");
  }
}
