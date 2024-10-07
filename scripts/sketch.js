let rainAmount = 0;
let rains = [];
let d = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(10);
    rainAmount = Math.floor(map(mouseY, 0, height, 1, 10));
    rain();
    thunder();
}

function windowResized() {
    createCanvas(windowWidth, windowHeight);
}

function rain() {
    for (let i = 0; i < rainAmount; i++) {
        rains.push(new Rain(random(width), 0, rains));
    }

    rains.forEach((r) => {
        r.display();
        r.update();
    });
}

function thunder() {
    if (mouseY > 500 && d == true) {
        fill(255, 255, 255, 200);
        rect(0, 0, width, height);
        setTimeout(() => {d = false}, 100)
    }
}