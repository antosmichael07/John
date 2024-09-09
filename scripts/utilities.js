function loadImage(source) {
    let img = new Image()
    img.src = source

    return img
}

function clearBackground(color) {
    c.fillStyle = color
    c.fillRect(0, 0, canvas.width, canvas.height)
}

function drawRelativeToPlayer(image, x, y) {
    c.drawImage(image, x - player.x + 600, y - player.y + 320)
}
