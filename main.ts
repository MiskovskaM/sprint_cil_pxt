radio.setGroup(3);
radio.setFrequencyBand(15);

let time = 0;

radio.onReceivedValue(function (name: string, value: number) {
    if(name == "Zapnistopky" && value == 1 )
    {
        while(input.lightLevel() > 100)
        {
            time += 1;
            basic.pause(1000);
            whaleysans.showNumber(time)
        }
        whaleysans.showNumber(time);
        radio.sendValue("cas", time)
    }
}) 

input.onButtonPressed(Button.B, function() {
    control.reset()
})