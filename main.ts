input.onPinPressed(TouchPin.P0, function () {
    if (Stato == 2 || Stato == 3) {
        Tentativo = Tentativo * 10 + 1
        Inserite += 1
        basic.showNumber(1)
        basic.pause(200)
        basic.clearScreen()
        if (Inserite == 3) {
            if (Tentativo == PIN) {
                Stato = 0
                basic.showIcon(IconNames.Yes)
                Tentativo = 0
                Inserite = 0
            } else {
                basic.showIcon(IconNames.No)
                basic.pause(500)
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Stato == 1) {
        Stato = 2
        Conto_Alla_Rovescia = 5
        while (Conto_Alla_Rovescia > 0 && Stato == 0) {
            basic.showNumber(Conto_Alla_Rovescia)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            basic.pause(1000)
            Conto_Alla_Rovescia += -1
        }
        if (Stato == 2) {
            Stato = 3
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (Stato == 2 || Stato == 3) {
        Tentativo = Tentativo * 10 + 3
        Inserite += 1
        basic.showNumber(3)
        basic.pause(200)
        basic.clearScreen()
        if (Inserite == 3) {
            if (Tentativo == PIN) {
                music.stopAllSounds()
                Stato = 0
                basic.showIcon(IconNames.Yes)
                Tentativo = 0
                Inserite = 0
            } else {
                basic.showIcon(IconNames.No)
                basic.pause(500)
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Stato == 0) {
        basic.showString("Arming...")
        basic.pause(2000)
        Stato = 1
        basic.showLeds(`
            . # # # .
            . # . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Stato == 2 || Stato == 3) {
        Tentativo = Tentativo * 10 + 2
        Inserite += 1
        basic.showNumber(2)
        basic.pause(200)
        basic.clearScreen()
        if (Inserite == 3) {
            if (Tentativo == PIN) {
                Stato = 0
                basic.showIcon(IconNames.Yes)
                Tentativo = 0
                Inserite = 0
            } else {
                basic.showIcon(IconNames.No)
                basic.pause(500)
            }
        }
    }
})
let Conto_Alla_Rovescia = 0
let Inserite = 0
let Tentativo = 0
let PIN = 0
let Stato = 0
Stato = 0
PIN = 123
let Cifra_Corrente = 0
basic.forever(function () {
    if (Stato == 3) {
        basic.showIcon(IconNames.Square)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.SmallSquare)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
})
