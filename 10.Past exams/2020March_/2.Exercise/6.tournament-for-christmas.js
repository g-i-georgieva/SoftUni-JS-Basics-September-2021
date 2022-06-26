function tournament(input) {
    let index = 0;
    let days = Number(input[index]);
    index++
    let totalMoney = 0
    let totalWins = 0
    let totalLoses = 0

    for (let i = 0; i < days; i++) {
        let command = input[index]
        index++

        let winMoney = 0
        let countWins = 0
        let countLoses = 0

        while (command !== "Finish") {
            let game = command
            let result = input[index]
            index++

            if (result === "win") {
                winMoney += 20
                countWins++
            } else {
                countLoses++
            }

            command = input[index]
            index++

        }
        totalWins += countWins
        totalLoses += countLoses

        if (countWins > countLoses) {
            winMoney = winMoney * 1.1
            totalMoney += winMoney
        } else {
            totalMoney += winMoney
        }

    }
    if(totalWins>totalLoses){
        console.log(`You won the tournament! Total raised money: ${(totalMoney*1.2).toFixed(2)}`)
    }else {
        console.log (`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }
    
}
tournament([3,
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])