function setup() {
  // put setup code here
  createCanvas(500,500);
  background('#ADD5F7');

  frameRate(50);
  

}

function draw() {


  
    
fill('#F2F2F2');


  
  
rect(400, 20, 55, 55);

rect(300, 20, 55, 55);

rect(200, 20, 55, 55);

rect(100, 20, 55, 55);

rect(10, 20, 55, 55);


let s = 'DRAW HERE.';
textSize(30);
fill(50);
text(s, 400, 400, 10, 100); // Text wraps within text box


  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX); 



}
  

