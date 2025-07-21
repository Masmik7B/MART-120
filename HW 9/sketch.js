function setup()
{   
    createCanvas(500,600);
}

function draw()
{  
    background(95,130,160);
    textSize(22)
    text("My Self Portrait", 10,80);
   
    fill(240, 200, 160);  
    circle(250,150,165);
    
    strokeWeight(10);  
    fill(0);  
    point(215,130);  
    point(280,130);
  
    point(245,145);
     
    ellipse(245, 185, 50, 10)
 
    line(180,100,250,55);  
    line(320,100,250,55);
      
    fill(40, 60, 170);  
    rect(200,235,100,150);
      
    fill(255);  
    triangle(225,290,250,370,275,290)
 
    fill(40, 60, 170);  
    rect(300,245,50,10);
     
    rect(150,245,50,10);
     
    rect(210,385,10,50);
      
    rect(280,385,10,50);
    
    fill(255);  
    textSize(22);  
    text("Mason Mikolas",270,530 );
}