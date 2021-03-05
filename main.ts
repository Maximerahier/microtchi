function Normal () {
    for (let index = 0; index < randint(40, 80); index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # # # .
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        # . . . #
        . # # # .
        `)
}
soundExpression.hello.play()
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        for (let index = 0; index < 2; index++) {
            soundExpression.twinkle.play()
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                # . # . #
                `)
            basic.showLeds(`
                . . . . .
                # . # . .
                . . . . .
                # . # . #
                . # . # .
                `)
            basic.showLeds(`
                # . # . .
                . . . . .
                . . . . .
                . # . # .
                # . # . #
                `)
            basic.showLeds(`
                . # . # .
                . . . . .
                . . . . .
                # . # . #
                . # . # .
                `)
            basic.showLeds(`
                . # . . #
                . . . . .
                . . . . .
                . # . # .
                # . # . #
                `)
            basic.showLeds(`
                . . . . .
                . # . . #
                . . . . .
                # . # . #
                . # . # .
                `)
        }
    } else if (input.logoIsPressed()) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                # # . # #
                . . . . .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . . .
            . # . . #
            . . # # .
            `)
        basic.showLeds(`
            . . # . #
            . . . . .
            . # . . #
            . . # # .
            . . . . .
            `)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        basic.showLeds(`
            # . # . .
            . . . . .
            # . . # .
            . # # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . # . .
            . . . . .
            # . . # .
            . # # . .
            `)
    } else {
        Normal()
    }
})
