radio.setGroup(3);
//radio.setFrequencyBand()

let time = 0;
let stopky = false



radio.onReceivedNumber(function (receivedNumber: number) {
    if (receivedNumber == 1) {
        RunComp.SetLightLevel()
    }
    if (receivedNumber == 2) {
        stopky = true
        control.inBackground(function () {
            while (stopky) {
                time += 1;
                basic.pause(1000);
                whaleysans.showNumber(time)

            }
        })

    }
})



RunComp.OnLightDrop(function () {
    stopky = false
    whaleysans.showNumber(time);
    radio.sendValue("cas", time)
})



input.onButtonPressed(Button.B, function () {
    control.reset()
})