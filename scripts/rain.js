class Rain {
    constructor(x, y, rains) {
        this.pos = createVector(x, y);
        this.z = random(0, 20);
        this.len = map(this.z, 0, 20, 10, 30);
        this.vel = createVector(0, map(this.z, 0, 20, 7, 12));
        this.color = Math.floor(map(this.z, 0, 20, 10, 255));
        this.thick = map(this.z, 0, 20, 0.5, 1);
        this.gravity = map(this.z, 0, 20, 0.1, 0.5);
        this.rains = rains;
    }

    display() {
        strokeWeight(this.thick);
        stroke(255, this.color);
        line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.len);
    }

    displayDrop() {
        stroke(this.color);
        noFill();
        arc(this.pos.x, this.pos.y+this.len, 10, 2, 0, random(QUARTER_PI, TWO_PI));
    }

    update() {
        this.pos.add(this.vel);
        this.vel.y += this.gravity;

        if (this.pos.y > Math.floor(map(this.z, 0, 20, height-140, height-120))) {
            this.displayDrop();
            const index = this.rains.indexOf(this);
            if (index !== -1) {
                this.rains.splice(index, 1);
            }
        }
    }
}