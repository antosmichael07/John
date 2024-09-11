const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")

let frameTime = Date.now()

function main() {
    frameTime = (Date.now() - frameTime) / 1000

    player.update()

    clearBackground("white")

    drawRelativeToPlayer(player.image, 0, 0)

    player.draw()

    frameTime = Date.now()
    requestAnimationFrame(main)
}

main()
