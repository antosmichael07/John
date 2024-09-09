class Player {
    constructor () {
        this.x = 0
        this.y = 0
        this.scale = 80
        this.cameraX = canvas.width / 2 - this.scale / 2
        this.cameraY = canvas.height / 2 - this.scale / 2
        this.speed = 3
        this.diagonalSpeed = 2.121
        this.xVelocity = 0
        this.yVelocity = 0
        this.moveKeysPressed = 0
        this.image = loadImage("./resources/textures/player.png")
    }

    update() {
        this.move()
    }

    move() {
        this.xVelocity = 0
        this.yVelocity = 0
        this.moveKeysPressed = 0

        if (keyInputs["KeyW"]) {
            this.yVelocity -= 1
            this.moveKeysPressed++
        }
        if (keyInputs["KeyS"]) {
            this.yVelocity += 1
            this.moveKeysPressed++
        }
        if (keyInputs["KeyA"]) {
            this.xVelocity -= 1
            this.moveKeysPressed++
        }
        if (keyInputs["KeyD"]) {
            this.xVelocity += 1
            this.moveKeysPressed++
        }

        if (this.moveKeysPressed != 2) {
            this.x += this.xVelocity * this.speed
            this.y += this.yVelocity * this.speed
        } else {
            this.x += this.xVelocity * this.diagonalSpeed
            this.y += this.yVelocity * this.diagonalSpeed
        }
    }

    draw() {
        c.drawImage(this.image, this.cameraX, this.cameraY)
    }
}

let player = new Player()
