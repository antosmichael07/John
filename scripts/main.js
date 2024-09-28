const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let frameTime = Date.now();

let level = new Level();
level.data[0][30] = 1;

let player = new Player();

function main() {
    frameTime = (Date.now() - frameTime) / 1000;
    clearBackground("white");

    player.update();
    level.draw(player.x);

    frameTime = Date.now();
    requestAnimationFrame(main);
}

main();
