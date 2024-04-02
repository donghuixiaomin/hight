let people_in = 0
let hight = 0
Microbit.laserController(Write_pin.w2, true)
Microbit.init()
Microbit.showNumber(Oled.oled29, hight)
basic.forever(function () {
    if (Microbit.ReadGrayLevel(Read_pin.r2) > 450) {
        let door = 0
        people_in = Microbit.ping(Ultrasonic_pin.u1, PingUnit.Centimeters)
        hight = door - people_in
        Microbit.showNumber(Oled.oled29, hight)
    }
    Microbit.showNumber(Oled.oled17, Microbit.ReadGrayLevel(Read_pin.r2))
})
