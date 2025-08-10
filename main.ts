input.onButtonPressed(Button.A, function () {
    buttonB = 1
    while (buttonB > 0) {
        distancetoThing = Tinybit.Ultrasonic_CarV2()
        if (distancetoThing >= 5) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
            basic.showIcon(IconNames.Tortoise)
            basic.pause(100)
        } else {
            basic.showNumber(distancetoThing)
            Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
            basic.pause(100)
            Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
            basic.showIcon(IconNames.Butterfly)
            basic.pause(1000)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    buttonB += -1
    basic.showIcon(IconNames.No)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.pause(100)
})
let buttonB = 0
let distancetoThing = 0
distancetoThing = 0
buttonB = 1
basic.showIcon(IconNames.Happy)
