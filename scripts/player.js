class Player {
    constructor () {
        this.x = 0
        this.z = 0
        this.width = 70
        this.height = 110
        this.depth = 10
        this.cameraX = canvas.width / 2 - this.width / 2
        this.cameraY = canvas.height / 2 - this.height / 2 + 5
        this.speed = 210
        this.diagonalSpeed = 148.47
        this.sprintSpeed = 330
        this.diagonalSprintSpeed = 233.31
        this.xVelocity = 0
        this.zVelocity = 0
        this.image = loadImage("./resources/textures/player.png")
    }

    update() {
        this.movement()
    }

    movement() {
        this.xVelocity = 0
        this.zVelocity = 0
        let moveKeysPressed = 0

        if (keyInputs["KeyW"]) {
            this.zVelocity -= 1
            moveKeysPressed++
        }
        if (keyInputs["KeyS"]) {
            this.zVelocity += 1
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
            this.move(moveKeysPressed, this.speed * frameTime, this.diagonalSpeed * frameTime)
        } else {
            this.move(moveKeysPressed, this.sprintSpeed * frameTime, this.diagonalSprintSpeed * frameTime)
        }
    }

    move(moveKeysPressed, speed, diagonalSpeed) {
        if (moveKeysPressed != 2) {
            this.x += this.xVelocity * speed
            this.z += this.zVelocity * speed
        } else {
            this.x += this.xVelocity * diagonalSpeed
            this.z += this.zVelocity * diagonalSpeed
        }
    }

    draw() {
        c.drawImage(this.image, this.cameraX, this.cameraY)
    }
}

let player = new Player()
