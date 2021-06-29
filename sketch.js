const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;

function preload(){
    backgroundImg=loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(800,320,70,70);
    box2 = new Box(1020,320,70,70);
    pig1 = new Pig(910, 350);
    log1 = new Log(910,260,300, PI/2);

    box3 = new Box(800,240,70,70);
    box4 = new Box(1020,240,70,70);
    pig3 = new Pig(910, 220);

    log3 =  new Log(910,180,300, PI/2);

    box5 = new Box(910,160,70,70);
    log4 = new Log(860,120,150, PI/7);
    log5 = new Log(970,120,150, -PI/7);

    bird = new Bird(200,100);

    log6 = new Log(450,240,100,PI);
    log7 = new Log(600,240,100,PI);
    log8 = new Log(525,200,200,PI/2);
    log9 = new Log(450,100,130,PI);
    log10 = new Log(600,100,130,PI);
    log11 = new Log(525,50,200,PI/2);
    
    pig2 = new Pig(525,350);
    pig4 = new Pig(525,150);
    pig5 = new Pig(525,20);

    box6 = new Box(525,175,70,70);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();
    
    pig2.display();
    pig4.display();
    pig5.display();

    box6.display();
}