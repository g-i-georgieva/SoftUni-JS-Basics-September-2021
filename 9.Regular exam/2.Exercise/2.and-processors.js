function andProcessors(input) {
    let neededProcessors = Number(input[0]);
    let numEmloyees = Number(input[1]);
    let workingDays = Number(input[2]);
    let numWorkingHours=numEmloyees*workingDays*8;
    let producedProcessor=Math.floor(numWorkingHours/3)
    let diff=Math.abs(neededProcessors-producedProcessor)
    
    if (producedProcessor>=neededProcessors){
        console.log(`Profit: -> ${(diff*110.10).toFixed(2)} BGN`)
    }else {
        console.log(`Losses: -> ${(diff*110.10).toFixed(2)} BGN`)
    }
}
andProcessors(["500",
    "8",
    "20"
])
andProcessors(["150",
    "7",
    "18"
])