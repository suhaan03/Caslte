const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine
var world
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world

  box1 = new Box(200,200,30,100)
  box2 = new Box(350,200,30,100)
  box3 = new Box(500,200,30,100)
  box4 = new Box(435,268,160,35)
  box5 = new Box(275,268,180,35)
  box6 = new Box(200,100,30,100)
  box7 = new Box(350,100,30,100)
  box8 = new Box(500,100,30,100)
  box9 = new Box(273,31,180,35)
  box10= new Box(435,31,160,35)

}

function draw() {
  background(0);  
 Engine.update(engine)

 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()
 
}