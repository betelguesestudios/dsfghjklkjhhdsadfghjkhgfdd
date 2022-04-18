input.onButtonPressed(Button.A, function () {
    Plr_Y += 1
})
let Plr_X = 4
let Plr_Y = 4
basic.forever(function () {
    led.plot(Plr_X, Plr_Y)
})
