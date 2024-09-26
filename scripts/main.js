const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")

let frameTime = Date.now()

function main() {
    frameTime = (Date.now() - frameTime) / 1000
    clearBackground("white")

    frameTime = Date.now()
    requestAnimationFrame(main)
}

main()
