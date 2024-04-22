const [width, height] = [300, 400];
let canvas;
let rainAmount = 0;
let music;

function preload() {
    music = loadSound("./assets/audio/fall.mp3");
}

function setup() {
    canvas = createCanvas(width, height);
    canvas.parent("canvas");
    canvas.style("border-radius", "15px");
    canvas.style("border-width", "0px");
    canvas.style("margin", "0");
    canvas.style("padding", "0");

    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState != "visible") {
          music.pause();
        }
    });
}

function draw() {
    background(10);

    if (mouseIn()) {
        rainAmount = Math.floor(map(mouseY, 0, height, 1, 8));

        if (!music.isPlaying()) {
            music.play();
            music.loop();
        }
    } else {
        rainAmount = 0;

        if (music.isPlaying()) {
            music.stop();
        }
    }
    music.setVolume(rainAmount/15);
    rain();
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