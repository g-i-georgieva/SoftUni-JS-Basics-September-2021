function club(input) {
    let index = 0
    let target = Number(input[index]);
    index++
    let command = input[index];
    index++
    let income = 0
    let totalIncome = 0

    while (command !== "Party!") {
        let currCoctail = command
        let numCurrCoctal = Number(input[index])
        index++

        let priceCoctail = currCoctail.length

        income = priceCoctail * numCurrCoctal

        if (income % 2 !== 0) {
            income = income * 0.75
        }

        totalIncome += income

        if (totalIncome >= target) {
            break;
        }
        command = input[index];
        index++
    }

    if (command === "Party!") {
        console.log(`We need ${(target-totalIncome).toFixed(2)} leva more.`)
    } else if (totalIncome >= target) {
        console.log(`Target acquired.`);
    }

    console.log(`Club income - ${totalIncome.toFixed(2)} leva.`)
}

club([100, "Sidecar", 7, "Mojito", 5, "White Russian", 10])