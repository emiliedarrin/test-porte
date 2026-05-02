basic.forever(function () {
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) <= 8) {
        basic.showIcon(IconNames.Yes)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 320)
        basic.pause(2000)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
    } else if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) > 8) {
        basic.showIcon(IconNames.No)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
    }
})
