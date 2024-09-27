class Level {
    constructor () {
        this.data = new Uint8Array(12);
        for (let i = 0; i < 12; i++) {
            this.data[i] = new Uint8Array(512);
        }
    }

    draw(playerX) {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                c.drawImageFromBelow(blockImages[data[i][j]], j * 50 - playerX, i * 50);
            }
        }
    }
}
