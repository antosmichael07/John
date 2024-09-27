function loadImage(source) {
    let img = new Image();
    img.src = source;

    return img;
}

function clearBackground(color) {
    c.fillStyle = color;
    c.fillRect(0, 0, canvas.width, canvas.height);
}

// The y direction in drawing on a canvas is flipped with this function and it starts at the ground
function drawImageFromBelow(img, x, y) {
    c.drawImage(img, x, 550 - y);
}
