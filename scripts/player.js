class Player {
    constructor () {
        this.x = 0
        this.y = 0
        this.scale = 80
        this.cameraX = canvas.width / 2 - this.scale / 2
        this.cameraY = canvas.height / 2 - this.scale / 2
        this.speed = 1.5
        this.diagonalSpeed = 1.060
        this.sprintSpeed = 2.5
        this.diagonalSprintSpeed = 1.767
        this.xVelocity = 0
        this.yVelocity = 0
        this.image = loadImage("./resources/textures/player.png")
    }

    update() {
        this.movement()
    }

    movement() {
        this.xVelocity = 0
        this.yVelocity = 0
        let moveKeysPressed = 0

        if (keyInputs["KeyW"]) {
            this.yVelocity -= 1
            moveKeysPressed++
        }
        if (keyInputs["KeyS"]) {
            this.yVelocity += 1
            moveKeysPressed++
        }
        if (keyInputs["KeyA"]) {
            this.xVelocity -= 1
            moveKeysPressed++
        }
        if (keyInputs["KeyD"]) {
            this.xVelocity += 1
            moveKeysPressed++
        }

        if (!keyInputs["ShiftLeft"]) {
            this.move(moveKeysPressed, this.speed, this.diagonalSpeed)
        } else {
            this.move(moveKeysPressed, this.sprintSpeed, this.diagonalSprintSpeed)
        }
    }

    move(moveKeysPressed, speed, diagonalSpeed) {
        if (moveKeysPressed != 2) {
            this.x += this.xVelocity * speed
            this.y += this.yVelocity * speed
        } else {
            this.x += this.xVelocity * diagonalSpeed
            this.y += this.yVelocity * diagonalSpeed
        }
    }

    draw() {
        c.drawImage(this.image, this.cameraX, this.cameraY)
    }
}

let player = new Player()
