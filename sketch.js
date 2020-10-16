const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var gamestate = "play";
var d=[];
var pl=[];
//var p=[];
var particle = null
var score,sturn;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(900,800);
  score=0;
  turn=0;
  ground = new Ground (240,790,1300,10);
for (i=0;i<=900;i=i+80){
  d.push(new Divisions(i,800-135,10,250))

}

for (i=40;i<=900;i=i+50){
  pl.push(new Plinko(i,75))
  
}
for (i=0;i<=900;i=i+50){
  pl.push(new Plinko(i,175))
  
}
for (i=75;i<=900;i=i+50){
  pl.push(new Plinko(i,275))
  
}

for (i=50;i<=900;i=i+50){
  pl.push(new Plinko(i,375))
  
}












}

function draw() {
  Engine.update(engine);
  background(0);  
 ground.display();
 for (i=0;i<d.length;i++){
  d[i].display();
}
textSize(25)
text("score "+score,100,50);
text("turns "+turn,800,50);



for (i=0;i<pl.length;i++){
  pl[i].display();
}
strokeWeight(3);
stroke ("yellow");
line (0,500,900,500);
noStroke(); 
if (particle!== null){
  particle.display();
  if (particle.body.position.y>500){
    if (particle.body.position.x<300){
      score=score+500
      particle=null
      if (turn>=5) gamestate="end"
    }
    else if (particle.body.position.x>301&&particle.body.position.x<600){
      score=score+100
      particle=null
      if (turn>=5) gamestate="end"
    }
    else if (particle.body.position.x>601&&particle.body.position.x<900){
      score=score+200
      particle=null
      if (turn>=5) gamestate="end"
    }
  }
}

}
function mousePressed(){
  if(gamestate!=="end"){
turn++;
particle=new Particle (mouseX,10,10);

  }
}