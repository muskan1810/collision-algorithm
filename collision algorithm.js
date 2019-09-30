var m,f;

function setup(){
createCanvas(1200,600);
m = createSprite(200,400,80,20);
m.shapeColor="blue";
m.debug= true;
f= createSprite(600,400,20,80);
f.shapeColor="blue";
f.debug=true;
}

function draw(){
background("black");
m.x= World.mouseX;
m.y=World.mouseY;

if(m.x - f.x < m.width/2+f.width/2 && m.y - f.y < m.width/2+f.width/2 &&  f.x - m.x < m.width/2+f.width/2 &&  f.y - m.y < m.width/2+f.width/2   ){
  m.shapeColor="red";
  f.shapeColor="red";
}
else{
  m.shapeColor="blue";
  f.shapeColor="blue";
}

drawSprites();

}