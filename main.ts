input.onButtonPressed(Button.A, function () {
    add += 1
    basic.showNumber(add)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(8, -3))
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let add = 0
let player: game.LedSprite = null
// اختبار تقنية عملي نهائي1446 سديم سعد الجهني
basic.showString("wellcome")
player = game.createSprite(0, 1)
