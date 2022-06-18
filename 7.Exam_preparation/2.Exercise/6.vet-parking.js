function vetParking(input) {
    let index = 0
    let numDays = Number(input[index]);
    index++
    let numHours = Number(input[index]);
    index++
    let price = 0
    for (let d = 1; d <= numDays; d++) {
        for (let h = 1; h <= numHours; h++) {
            if (d % 2 == 0 && h % 2 !== 0) {
                price += 2.5
            } else if (d % 2 !== 0 && h % 2 == 0) {
                price += 1.25
            } else {
                price += 1
            }
        }
        console.log(`Day: ${d} – ${price} leva`);
    }
    console.log(`Total: ${price} leva`);
}
vetParking([2,
    5
])
vetParking([5,
    2
])