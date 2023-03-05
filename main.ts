radio.setGroup(23)
basic.forever(function () {
    radio.sendNumber(input.temperature())
    basic.pause(5000)
})
