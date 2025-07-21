var characterX = 100;
var characterY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var shape2X = 200;
var shape2Y = 100;
var shape2XSpeed;
var shape2YSpeed;

var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(500, 600);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(120,45,78);
    stroke(0);
    fill(0);
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0, height-10,width, 10);
    rect(width-10,0,10,height-50);

    textSize(16);
    text("EXIT", width-50,height-50);

    fill(23,40,123);
    circle(characterX,characterY,25);

    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

    // Obstacle 1
    fill(13,145,14);
    circle(shapeX, shapeY, 25);
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    // Obstacle 2
    fill(255, 165, 0);
    circle(shape2X, shape2Y, 35);
    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }

    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);

    if(characterX > width - 10 && characterY > height - 60)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2 - 50, height/2 - 50);
    }
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}