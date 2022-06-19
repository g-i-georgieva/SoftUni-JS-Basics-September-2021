function excursionSale(input) {
    let index = 0
    let numExcursionsSea = Number(input[index]);
    index++
    let numExcursionsMountain = Number(input[index]);
    index++
    let command = input[index];
    let sum = 0
    while (command !== "Stop") {
        let currrExcursion = input[index];

        if (currrExcursion === "sea" && numExcursionsSea > 0) {
            numExcursionsSea--
            sum += 680
        } else if (currrExcursion == "mountain" && numExcursionsMountain > 0) {
            numExcursionsMountain--
            sum += 499
        }
        index++
        command = input[index];
        if (numExcursionsMountain == 0 && numExcursionsSea == 0) {
            console.log(`Good job! Everything is sold.`);
            console.log(`Profit: ${sum} leva.`)
            break;
        }
    }

    if (command == "Stop") {
        console.log(`Profit: ${sum} leva.`)
    }
}
excursionSale(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"
])
excursionSale(["6",
    "3",
    "sea",
    "mountain",
    "mountain",
    "mountain",
    "sea",
    "Stop"
])