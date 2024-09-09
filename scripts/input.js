let keyInputs = {}

document.addEventListener("keydown", function(e) {
    keyInputs[e.code] = true
})
document.addEventListener("keyup", function(e) {
    keyInputs[e.code] = false
})
