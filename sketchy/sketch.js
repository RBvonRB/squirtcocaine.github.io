let x = 0;
let y = 0;
let sz = 100;



function setup () {
    createCanvas (windowWidth, windowHeight);
    rectMode(CENTER);
    background (100, 23, 55);
    frameRate (10);

}

function draw () {
    background (100, 23, 55);
    fill(197, 239, 203);
    noStroke();
    // strokeWeight();
    x = random(width);
    y = random(height);
    sz = random(1, 150)
    rect(x, y, sz, sz);
}

