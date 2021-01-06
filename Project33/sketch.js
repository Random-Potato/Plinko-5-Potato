var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particle = null;
var turn = 0;
var count = 0;
var gameover, gameoverImage;
var gameState = "play";

var divisionHeight=300;
var score =0;
function preload(){
  gameoverImage = loadImage("gameover.png");
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  console.log(gameover);
  background("black");
  textSize(20)
  if (count >= 5){
    gameState = "end"
  }
 //text("Score : "+score,20,30);
  Engine.update(engine);
  
  if(gameState === "play"){
    if(particle !== null){
      particle.display();

      if(particle.body.position.y>700){

        if(particle.body.position.x>0&&particle.body.position.x<80){
          score -= 50;
         particle = null;
        }
      }

      if(particle !== null){
        if(particle.body.position.y>700){

        if(particle.body.position.x>80&&particle.body.position.x<160){
          score += 40;
          particle = null;
        }
      }
      }
      
      if(particle !== null){
        if(particle.body.position.y>700){

        if(particle.body.position.x>160&&particle.body.position.x<240){
          score -= 30;
          particle = null;
        }
      }
      }
    
      if(particle !== null){
        if(particle.body.position.y>700){

        if(particle.body.position.x>240&&particle.body.position.x<320){
          score += 20;
          particle = null;
        }
      }
      }
    
      if(particle !== null){
        if(particle.body.position.y>700){

        if(particle.body.position.x>320&&particle.body.position.x<400){
          score += Math.round(random(-30, 100));
          particle = null;
        }
      }
      }
    
      if(particle !== null){
        if(particle.body.position.y>700){

        if(particle.body.position.x>400&&particle.body.position.x<480){
          score -= 100;
          particle = null;
        }
      }
      }
    
      if(particle !== null){
        if(particle.body.position.y>700){

        if(particle.body.position.x>480&&particle.body.position.x<560){
          score -= 20;
          particle = null;
        }
      }
      }
    
      if(particle !== null){
        if(particle.body.position.y>700){

        if(particle.body.position.x>560&&particle.body.position.x<640){
          score += 30;
          particle = null;
        }
      }
      }
    
      if(particle !== null){
        if(particle.body.position.y>700){

        if(particle.body.position.x>640&&particle.body.position.x<720){
          score -= 40;
          particle = null;
        }
      }
      }
    
      if(particle !== null){
        if(particle.body.position.y>700){

        if(particle.body.position.x>720&&particle.body.position.x<800){
          score += 50;
          particle = null;
        }
      }
      }
    }
    
    
  }
  if(gameState === "end"){
    console.log("its the end")
    gameover = new Gameover(400, 400, 100, 100);

  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   //  score++;
   //}
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   text("score: " + score, 20,20);
   text("???", 340, 600);
   text("-100", 420, 600);
   text("-50", 40, 600);
   text("40", 120, 600);
   text("-30", 200, 600);
   text("20", 280, 600);
   text("-20", 500, 600);
   text("30", 580, 600);
   text("-40", 660, 600);
   text("50", 740, 600);
}

function mousePressed(){
  if(gameState !== "end"){
    if(particle !== null){
      World.remove(world, particle);
    }
    particle = new Particle(mouseX, 10, 10);
    console.log("pow");
    count++;
    console.log(count);
  }
}