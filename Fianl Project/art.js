var x = [];
var y = [];
var diameter = [];
var shapeColors = [];
var xSpeed = [];
var ySpeed = [];

var rectX = [];
var rectY = [];
var rectW = [];
var rectH = [];
var rectColors = [];
var rectXSpeed = [];
var rectYSpeed = [];

var triX = [];
var triY = [];
var triSize = [];
var triColors = [];
var triXSpeed = [];
var triYSpeed = [];

var borderColor;

function setup()
{
    createCanvas(1500, 725);

    borderColor = color(random(255), random(255), random(255));

    for (var i = 0; i < 100; i++) // Circles
    {
        x[i] = getRandomNumber(width);
        y[i] = getRandomNumber(height);
        diameter[i] = getRandomNumber(50);
        shapeColors[i] = color(random(255), random(255), random(255));
        xSpeed[i] = random([-1, 1]);
        ySpeed[i] = random([-1, 1]);
    }

    for (var i = 0; i < 100; i++) // Rectangles
    {
        rectX[i] = getRandomNumber(width);
        rectY[i] = getRandomNumber(height);
        rectW[i] = getRandomNumber(60) + 20;
        rectH[i] = getRandomNumber(30) + 20;
        rectColors[i] = color(random(255), random(255), random(255));
        rectXSpeed[i] = random([-1, 1]);
        rectYSpeed[i] = random([-1, 1]);
    }

    for (var i = 0; i < 100; i++) // Triangles
    {
        triX[i] = getRandomNumber(width);
        triY[i] = getRandomNumber(height);
        triSize[i] = getRandomNumber(50);
        triColors[i] = color(random(255), random(255), random(255));
        triXSpeed[i] = random([-1, 1]);
        triYSpeed[i] = random([-1, 1]);
    }
}

function draw()
{
    background(120, 45, 78);
    createBorders(50);     

    // Circles
    for (var i = 0; i < x.length; i++)
    {
        fill(shapeColors[i]);
        circle(x[i], y[i], diameter[i]);
        x[i] += xSpeed[i];
        y[i] += ySpeed[i];

        if (x[i] > width && x[i] < width + 100) x[i] = 0; 
        if (x[i] < 0 && x[i] > -100) x[i] = width;
        if (y[i] > height && y[i] < height + 100) y[i] = 0;
        if (y[i] < 0 && y[i] > -100) y[i] = height;
    }

    // Rectangles
    for (var i = 0; i < rectX.length; i++)
    {
        fill(rectColors[i]);
        rect(rectX[i], rectY[i], rectW[i], rectH[i]);
        rectX[i] += rectXSpeed[i];
        rectY[i] += rectYSpeed[i];

        if (rectX[i] > width && rectX[i] < width + 100) rectX[i] = 0;
        if (rectX[i] < 0 && rectX[i] > -100) rectX[i] = width;
        if (rectY[i] > height && rectY[i] < height + 100) rectY[i] = 0;
        if (rectY[i] < 0 && rectY[i] > -100) rectY[i] = height;
    }

    // Triangles
    for (var i = 0; i < triX.length; i++)
    {
        fill(triColors[i]);
        triangle(triX[i], triY[i],
                 triX[i] + triSize[i], triY[i] + triSize[i],
                 triX[i] - triSize[i], triY[i] + triSize[i]);
        triX[i] += triXSpeed[i];
        triY[i] += triYSpeed[i];

        if (triX[i] > width && triX[i] < width + 100) triX[i] = 0;
        if (triX[i] < 0 && triX[i] > -100) triX[i] = width;
        if (triY[i] > height && triY[i] < height + 100) triY[i] = 0;
        if (triY[i] < 0 && triY[i] > -100) triY[i] = height;
    }
}

function createBorders(thickness)
{
    fill(borderColor);
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, 0, thickness, height);
}

function getRandomNumber(number)
{
    return Math.floor(Math.random() * number) + 10;
}