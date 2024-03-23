let Pixel = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
Pixel.showRainbow(1, 360)
let item = 0
basic.forever(function () {
    if (item < 24) {
        item += 1
        Pixel.show()
        Pixel.clear()
    } else {
        item = 0
        Pixel.showRainbow(1, 360)
    }
    control.waitMicros(control.millis())
})
