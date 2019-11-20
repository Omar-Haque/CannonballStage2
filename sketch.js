//This is the cannonball game project 24
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector} = Matter;

var engine, world;
var ground, cannon;
var angle = 0;
var ball1, ball2, ball3;

function setup() {
  createCanvas(900, 550);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(450, 510, 900, 10); 
  cannon = new Cannon(75,height-125,60,30);
  ball1 = new Ball(600, 250, 20);
}

function draw() {
  background(255);
  //console.log(angle);
  Engine.update(engine);
console.log(ball1.body);
  //Display
  ground.display();
  cannon.display();
  ball1.display();
}