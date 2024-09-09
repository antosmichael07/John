const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")

function main() {
    player.update()

    clearBackground("white")

    drawRelativeToPlayer(player.image, 0, 0)

    player.draw()

    requestAnimationFrame(main)
}

main()
