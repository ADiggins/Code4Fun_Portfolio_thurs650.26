console.log("Pong.js is connnected! :)")

let ball, vel;

function setup() {
    var myCanvas = createCanvas(500,500);
    myCanvas.parent('gamePanel');
    ball = createVector(250,250);
    vel = createVector(-5,0);
    vel.rotate( random(-1,1) );
}

function draw() {
    background(255,0,0);
    ball.add(vel);
    if (ball.x < 10) vel.reflect ( createVector(1,0) );
    if (ball.x > 490) vel.reflect( createVector(-1,0));
    if (ball.y < 10) vel.reflect ( createVector(0,1) );
    if (ball.y > 490) vel.reflect( createVector(0,-1));
    ellipse(ball.x, ball.y, 20, 20);

    if (dist(450,mouseY, ball.x,ball.y) < 20)
        vel.reflect(createVector(-1,0));

    rectMode(CENTER);
    rect(450, mouseY, 20, 20);
}