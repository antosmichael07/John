class Level {
    constructor () {
        this.data = [
            new Uint8Array(512), new Uint8Array(512), new Uint8Array(512), new Uint8Array(512), new Uint8Array(512), new Uint8Array(512), 
            new Uint8Array(512), new Uint8Array(512), new Uint8Array(512), new Uint8Array(512), new Uint8Array(512), new Uint8Array(512)
        ];
    }

    draw(playerX) {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                // If the block is off-screen, it won't be drawn for better performance
                if (j * 50 - playerX < -50) {
                    continue;
                }
                if (j * 50 - playerX > 1280) {
                    break;
                }

                if (this.data[i][j] !== 0) {
                    drawImageFromBelow(blockImages[this.data[i][j]], j * 50 - playerX, i * 50);
                }
            }
        }
    }
}
