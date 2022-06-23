let steps = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    steps = 0
    steps += 1
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("calling for help")
    basic.clearScreen()
    music.playMelody("C - C - - C - - ", 92)
    music.playMelody("C - C - - C - - ", 82)
    music.playMelody("C - C - - C - - ", 92)
    music.playMelody("C - C - - C - - ", 82)
    basic.showString("cant call trying again")
    music.playMelody("C - C - - C - - ", 92)
    music.playMelody("C - C - - C - - ", 82)
    music.setVolume(127)
    basic.showString("Hello!")
    basic.showString("what is the proplem?")
    basic.clearScreen()
    basic.clearScreen()
})
input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 50000000; index++) {
        basic.clearScreen()
        basic.clearScreen()
        basic.clearScreen()
        basic.clearScreen()
    }
    basic.showString("ok we will fix that")
    basic.clearScreen()
    basic.showString("£4.50")
    images.createImage(`
        . . # . .
        . # . # .
        # # # . .
        . # . . .
        # # # . .
        `).showImage(0)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("getting the drink")
    music.playMelody("- G A G B G B E ", 120)
    music.playMelody("- G A G B G B E ", 120)
    basic.clearScreen()
    basic.showString("thank you for getting drink")
    basic.showNumber(steps)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("press A to start")
})
