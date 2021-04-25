const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Body;
const Body = Matter.Body;

var divisons = [];
var divisonsHeight = 300;
var particles = [];
var plinkos = [];
var score = 0;
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;
function setup(){
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

    ground = new Ground(400,690,800,20);

  for (var i = 0; i<=width; j = j+50) {
    divisons.push(new Division(i,height-divisonsHeight/2,10,divisonsHeight));
  }

  for (var j=50; j<=width; j = j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j=75; j<=width; j = j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j=50; j<=width; j = j=j+50) {
    plinkos.push(new Plinko(j,375));
  }
  Engine.run(engine);
}

function draw(){
  rectMoad(CENTER);
  background(0);
  background("black");
    textSize(20)
   text("Score : "+score,20,30);
    Engine.update(engine);

  for (var n = 0; n<divisons.length;n++) {
    divisons[n].display();
  }

  if (frameCount %60 === 0) {
    particles.push(new particle(random(width/2-30,width/2+30),10,10));
    if(frameCount%60===0){
      score++;
  }

  for (var h = 0; h<particles.length;h++) {
    particles[h].display();
  }

  for (var j=0; j<plinkos.length;j++) {
    plinkos[j].display();
  }

  for (var k = 0; k < divisions.length; k++){
  divisions[k].display();
  }

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions( height-divisionHeight/2, 10, divisionHeight));
  }

  ground.display();
}
