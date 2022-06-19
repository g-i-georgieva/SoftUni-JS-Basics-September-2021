function grandpaStavri(input) {
    let index = 0
    let numDays = Number(input[index]);
    index++
    let totalLiters = 0;
    let totalDegrees = 0

    for (let i = 0; i < numDays; i++) {
        let currentLiters = Number(input[index]);
        index++
        let currentDegrees = Number(input[index]);
        index++
        totalLiters += currentLiters;
        totalDegrees += currentLiters * currentDegrees

    }

    let averageDegrees = totalDegrees / totalLiters
    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${averageDegrees.toFixed(2)}`);

    if (averageDegrees < 38) {
        console.log(`Not good, you should baking!`)
    } else if (averageDegrees >= 38 && averageDegrees <= 42) {
        console.log(`Super!`)
    } else {
        console.log(`Dilution with distilled water!`)
    }
}

grandpaStavri(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"
])

grandpaStavri(["2",
    "200",
    "43",
    "200",
    "40"
])