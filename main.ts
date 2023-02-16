radio.setGroup(3);
//radio.setFrequencyBand(15);



input.onButtonPressed(Button.A, function () {
    RunComp.SetLightLevel()
})


let time = 0;

radio.onReceivedValue(function (name: string, value: number) {

    if(name == "Zpn" && value == 1 )
    {
            basic.forever(function() {
                time += 1;
                basic.pause(1000)
                whaleysans.showNumber(time);
            })  
    }
}) 

if (RunComp.OnLightDrop(function ()
{  
    whaleysans.showNumber(time);
    radio.sendValue("cas", time)

     
}))


input.onButtonPressed(Button.B, function() {
    control.reset()
})