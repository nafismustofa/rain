let rainAmount = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(10);
    mouseIn() ? rainAmount = Math.floor(map(mouseY, 0, height, 1, 10)) : rainAmount = 1;
    rain();
}

function windowResized() {
    createCanvas(windowWidth, windowHeight);
}

let rains = [];

function rain() {
    for (let i = 0; i < rainAmount; i++) {
        rains.push(new Rain(random(width), 0, rains));
    }

    rains.forEach((r) => {
        r.display();
        r.update();
    });
}

function mouseIn() {
    return ((mouseX > 0 && mouseX < width) && (mouseY > 0 && mouseY < height));
}