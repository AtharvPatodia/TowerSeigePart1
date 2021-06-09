const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25;
var gameState = "onSling";
var polygon, slingshot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400, 350, 225, 10);
    ground2 = new Ground(800, 300, 175, 10);
    //level 1 first tower

    box1 = new Box(437.5, 365, 25, 20);
    box2 = new Box(462.5, 365, 25, 20);
    box3 = new Box(487.5, 365, 25, 20);
    box4 = new Box(512.5, 365, 25, 20);
    box5 = new Box(537.5, 365, 25, 20);
    box6 = new Box(562.5, 365, 25, 20);
    box7 = new Box(587.5, 365, 25, 20);

    //level 2 first tower

    box8 = new Box(462.5, 385, 25, 20);
    box9 = new Box(487.5, 385, 25, 20);
    box10 = new Box(512.5, 385, 25, 20);
    box11 = new Box(537.5, 385, 25, 20);
    box12 = new Box(562.5, 385, 25, 20);

    //level 3 first tower

    box13 = new Box(487.5, 405, 25, 20);
    box14 = new Box(512.5, 405, 25, 20);
    box15 = new Box(537.5, 405, 25, 20);

    //level 4/top first tower

    box16 = new Box(512.5, 425, 25, 20);

    //level 1 second tower

    box17 = new Box(837.5, 310, 25, 20);
    box18 = new Box(862.5, 310, 25, 20);
    box19 = new Box(887.5, 310, 25, 20);
    box20 = new Box(912.5, 310, 25, 20);
    box21 = new Box(937.5, 310, 25, 20);

    //level 2 second tower

    box22 = new Box(862.5, 330, 25, 20);
    box23 = new Box(887.5, 330, 25, 20);
    box24 = new Box(912.5, 330, 25, 20);

    //level3/top second tower

    box25 = new Box(887.5, 350, 25, 20);

    //polygon

    polygon = new Polygon(200, 325, 30, 30);
}
function draw(){
    background(0, 0, 0);
    Engine.update(engine);
    ground1.display();
    ground2.display();

    box1.shapeColor = color("Green");
    box2.shapeColor = color("Green");
    box3.shapeColor = color("Green");
    box4.shapeColor = color("Green");
    box5.shapeColor = color("Green");
    box6.shapeColor = color("Green");
    box7.shapeColor = color("Green");
    box8.shapeColor = color("Green");
    box9.shapeColor = color("Green");
    box10.shapeColor = color("Green");
    box11.shapeColor = color("Green");
    box12.shapeColor = color("Green");
    box13.shapeColor = color("Green");
    box14.shapeColor = color("Green");
    box15.shapeColor = color("Green");
    box16.shapeColor = color("Green");

    box17.shapeColor = color("red");
    box18.shapeColor = color("red");
    box19.shapeColor = color("red");
    box20.shapeColor = color("red");
    box21.shapeColor = color("red");
    box22.shapeColor = color("red");
    box23.shapeColor = color("red");
    box24.shapeColor = color("red");
    box25.shapeColor = color("red");

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    polygon.display();
}

function mouseDragged(){
    if (gameState==="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}