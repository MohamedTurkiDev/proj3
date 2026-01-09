let nombre1 = 0
let nombre2 = 0
// Premier joueur (bouton A)
input.onButtonPressed(Button.A, function () {
    nombre1 = Math.randomRange(1, 50)
    basic.showString("J1:")
    basic.showNumber(nombre1)
    basic.pause(500)
    // Vérifier si le nombre est pair
    if (nombre1 % 2 == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(1000)
    basic.clearScreen()
})
// Deuxième joueur (bouton B)
input.onButtonPressed(Button.B, function () {
    nombre2 = Math.randomRange(1, 50)
    basic.showString("J2:")
    basic.showNumber(nombre2)
    basic.pause(500)
    // Vérifier si le nombre est pair
    if (nombre2 % 2 == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(1000)
    basic.clearScreen()
})
