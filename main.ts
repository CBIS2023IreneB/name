input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("Irene")
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.play(music.stringPlayable("F A G C5 B A F A ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("Rami")
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    music.play(music.stringPlayable("G F E D C C C C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(33)
    music.play(music.stringPlayable("E A F C5 E A D G ", 120), music.PlaybackMode.UntilDone)
})
