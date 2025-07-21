var headX = 250;
var headDirection;

var armX = 150;
var armDirection;

var bodyY = 235;
var bodyDirection;

var legY = 385;
var legDirection;

var triX = 0;
var triY = 0;
var triXDirection;
var triYDirection;

var size = 22;
var count = 0;
var sizeDirection = 2;

function setup()
{   
    createCanvas(500,600);
    headDirection = floor(random() * 5) + 1;
    armDirection = floor(random() * 5) + 1;
    bodyDirection = floor(random() * 5) + 1;
    legDirection = floor(random() * 5) + 1;
    triXDirection = floor(random() * 5) + 1;
    triYDirection = triXDirection;
}

function draw()
{  
    background(95,130,160);
    textSize(22)
    text("My Self Portrait", 10,80);
   
    fill(240, 200, 160);  
    circle(headX,150,165);
    headX += headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

    strokeWeight(10);  
    fill(0);  
    point(215,130);  
    point(280,130);
  
    point(245,145);
     
    ellipse(245, 185, 50, 10)

    line(180,100,250,55);  
    line(320,100,250,55);
    
    fill(40, 60, 170);  
    rect(200,bodyY,100,150);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450)
    {
        bodyDirection *= -1;
    }

    fill(255);  
    triangle(225 + triX,290 + triY,250 + triX,370 + triY,275 + triX,290 + triY)
    triX += triXDirection;
    triY += triYDirection;
    if(triX >= 20 || triX <= -20)
    {
        triXDirection *= -1;
        triYDirection *= -1;
    }

    fill(40, 60, 170);  
    rect(300,245,50,10);

    rect(armX,245,50,10);
    armX += armDirection;
    if(armX >= 170 || armX <= 130)
    {
        armDirection *= -1;
    }

    rect(210,legY,10,50);

    rect(280,legY,10,50);
    legY += legDirection;
    if(legY >= 405 || legY <= 365)
    {
        legDirection *= -1;
    }

    fill(255);  
    textSize(size);
    size += sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *= -1;
        count = 0;
    }
    text("Mason Mikolas",270,530);
}