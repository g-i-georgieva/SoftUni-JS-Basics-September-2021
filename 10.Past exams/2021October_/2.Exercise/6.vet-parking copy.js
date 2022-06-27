function vetParking(input) {
    let index = 0
    let numDays = Number(input[index]);
    index++
    let numHours = Number(input[index]);
    index++
    let totalCharge = 0

    for (let d = 1; d <= numDays; d++) {
        let hourCharge = 0
        let dayCharge = 0

        for (let h = 1; h <= numHours; h++) {
            if (d % 2 == 0 && h % 2 !== 0) {
                hourCharge = 2.5
            } else if (d % 2 !== 0 && h % 2 == 0) {
                hourCharge = 1.25
            } else {
                hourCharge = 1
            }
            totalCharge += hourCharge
            dayCharge+=hourCharge

        }
        console.log(`Day: ${d} - ${dayCharge.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalCharge.toFixed(2)} leva`);
}
vetParking([2,
    5
])
vetParking([5,
    2
])