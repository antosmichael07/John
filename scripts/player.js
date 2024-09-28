class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    update() {
        this.move();
    }

    move() {
        this.x += 1;
    }
}
