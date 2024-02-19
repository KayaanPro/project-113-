function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(325,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 40, 40, 560, 400);
    fill('pink')
    circle(30, 30, 55, 75);
    rect(55, 15, 530, 20);
    circle(610, 30, 55, 75);
    rect(55, 450, 530, 20);
    circle(610, 455, 55, 75);
    circle(30, 455, 55, 75);
    rect(17, 50, 25, 385);
    rect(597, 50, 25, 385);

    
    
}

function take_snapshot(){
    save('Name.png')
}

