let x = 0;
let y = 0;
let sz = 100;
let sin1 ;

let num = 100;
let mx = [];
let my = [];




function setup () {
    createCanvas (windowWidth, windowHeight, WEBGL);
    pg = createGraphics(400, 250);

    // rect = rechteck
    // ellipse = kreis
    // rectMode(CENTER);
    // background (100, 23, 55);
   
    // frameRate = Frames pro Sekunde (werden geladen)
    frameRate (40);

    fill(255, 153);
    for (let i = 0; i < num; i++) {
      mx.push(i);
      my.push(i);
    }
}


function draw () {
    background ("#14213d");
    fill(197, 239, 203);
    noStroke();
    // strokeWeight();
    translate(-width/2, -height/2)

    push();
        //mouse bewegung
        //rotate(frameCount/200);
        //fill(231,111,81);
        //noStroke();
        //ellipse(mouseX, mouseY, 60, 60);
    pop();
 
    push();
        for (let i = 0; i < 100; i++) {
            x = random(width);
            y = random(height);
            sz = random(1, 9);
            fill((i+1)+105, (i+1)*30, (i+1)*50);
            ellipse(x, y, sz, sz);
        }

        // fill(0);
        // ellipse(width/2, height/2, 200, 100);
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
    pop();
    

    push();
        //rotate(frameCount*0.10);
        fill(129, 178, 154);
        arc(500, 600, 250, 700, PI, TWO_PI);
       
        fill(0);
        arc(150, 600, 400, 600, PI, TWO_PI);

        fill(61, 64, 91);
        arc(300, 600, 250, 450, PI, TWO_PI);

        fill(129, 178, 154);
        arc(500, 600, 250, 700, PI, TWO_PI);

        fill(61, 64, 91);
        arc(800, 650, 250, 500, PI, TWO_PI);

        fill(224, 122, 95);
        arc(200, 750, 500, 600, PI, TWO_PI);

        fill(242, 204, 143);
        arc(500, 750, 300, 400, PI, TWO_PI);

        fill(244, 241, 222);
        arc(700, 750, 300, 600, PI, TWO_PI);

        fill(224, 122, 95);
        arc(900, 750, 200, 300, PI, TWO_PI);

    pop();
        }



      // Cycle through the array, using a different entry on each frame.
  // Using modulo (%) like this is faster than moving all the values over.
  fill(0);
  let which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;

  for (let i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    let index = (which + 1 + i) % num;
    ellipse(mx[index], my[index], i, i);
  }
}