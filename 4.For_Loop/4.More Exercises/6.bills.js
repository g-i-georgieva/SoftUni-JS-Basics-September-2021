function bills(input) {
    index = 0;
    let months = Number(input[index]);
    index++
    let totalElectricity = 0
    let water = 20
    let totalWater = 0
    let net = 15
    let totalNet = 0
    let others = 0
    let totalOthers = 0
    let monthCosts = 0
    let totalCosts = 0

    for (let i = 0; i < months; i++) {
        let electricity = Number(input[index])
        index++

        totalElectricity += electricity;
        totalWater += water;
        totalNet += net;
        others = (electricity + water + net)+(electricity + water + net)*0.2
        totalOthers += others
        monthCosts = others + electricity + water + net
        totalCosts += monthCosts
    }
    console.log(`Electricity: ${(totalElectricity).toFixed(2)} lv`);
    console.log(`Water: ${(totalWater).toFixed(2)} lv`);
    console.log(`Internet: ${(totalNet).toFixed(2)} lv`);
    console.log(`Other: ${(totalOthers).toFixed(2)} lv`);
    console.log(`Average: ${(totalCosts/months).toFixed(2)} lv`);

}

bills([5, 68.63, 89.25, 132.53, 93.53, 63.22])