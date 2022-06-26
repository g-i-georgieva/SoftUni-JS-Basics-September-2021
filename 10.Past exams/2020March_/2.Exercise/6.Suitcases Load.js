function suitcasesLoad(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++
    let command = input[index]
    index++
    let suitcases = 0

    while (command !== "End") {
        let currWeight = Number(command)

        if (index % 3 === 0) {
            currWeight = currWeight * 1.1
        }

        if (currWeight > capacity) {
            break;
        }

        suitcases++
        capacity -= currWeight

        command = input[index];
        index++
    }

    if (command === "End") {
        console.log(`Congratulations! All suitcases are loaded!`)
        console.log(`Statistic: ${suitcases} suitcases loaded.`)
    } else {
        console.log(`No more space!`)
        console.log(`Statistic: ${suitcases} suitcases loaded.`)
    }

}
suitcasesLoad([1200.2,
    260,
    380.5,
    125.6,
    305,
    "End"
])