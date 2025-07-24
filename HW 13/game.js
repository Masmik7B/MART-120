var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeXs = [];
var shapeYs = [];
var diameters = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];
var shapeColors = [];

var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600); 

    for (var i = 0; i < 5; i++) {
        shapeXs[i] = getRandomNumber(width);
        shapeYs[i] = getRandomNumber(height);
        diameters[i] = getRandomNumber(30);
        shapeXSpeeds[i] = getRandomNumber(5);
        shapeYSpeeds[i] = getRandomNumber(5);
        shapeColors[i] = color(random(255), random(255), random(255));
    }
}

function draw() {
    background(120, 45, 78);
    stroke(0);
    fill(0);

    rect(0, 0, width, 10);
    rect(0, 0, 10, height);
    rect(0, height - 10, width, 10);
    rect(width - 10, 0, 10, height - 50);

    textSize(16);
    text("EXIT", width - 50, height - 50);

    fill(23, 40, 123);
    circle(characterX, characterY, 25);

    if (keyIsDown(w)) characterY -= 10;
    if (keyIsDown(s)) characterY += 10;
    if (keyIsDown(a)) characterX -= 10;
    if (keyIsDown(d)) characterX += 10;

    for (var i = 0; i < shapeXs.length; i++) {
        fill(shapeColors[i]);
        circle(shapeXs[i], shapeYs[i], diameters[i]);

        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];

        if (shapeXs[i] > width) shapeXs[i] = 0;
        if (shapeXs[i] < 0) shapeXs[i] = width;
        if (shapeYs[i] > height) shapeYs[i] = 0;
        if (shapeYs[i] < 0) shapeYs[i] = height;
    }

    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);

    if (characterX > width - 10 && characterY > height - 60) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 10;
}