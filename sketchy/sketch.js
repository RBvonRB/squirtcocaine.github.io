let x = 0;
let y = 0;
let sz = 100;
let sin1 ;



function setup () {
    createCanvas (windowWidth, windowHeight, WEBGL);

    //rect = rechteck
    // rectMode(CENTER);
    // background (100, 23, 55);
   
    // frameRate = Frames pro Sekunde (werden geladen)
    frameRate (40);

}

function draw () {
    background ("#14213d");
    fill(197, 239, 203);
    noStroke();
    // strokeWeight();
    translate(-width/2, -height/2)
 

    for (let i = 0; i < 100; i++) {
        x = random(width);
        y = random(height);
        sz = random(1, 9);
        fill((i+1)+105, (i+1)*30, (i+1)*50);
        ellipse(x, y, sz, sz);
      }

      fill(0);
      ellipse(width/2, height/2, 200, 100);
      sin1 = sin(frameCount*0.1)


      fill(300,200,0);
      ellipse(width/2, height/3, 100+sin1*10, 100+sin1*10);


      rotateZ(frameCount*0.01);

      for (let i = 0; i < 10; i++) {
        if(i==0){
            fill(200,200,0)
        } else {
            fill(0);
        }
        
        ellipse(i*100, 0, 50, 50);

      }
}

