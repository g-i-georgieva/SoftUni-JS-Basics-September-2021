function goldMine(input) {
    let index = 0;
    let numLocations = Number(input[index]);
    index++
    for (let i = 1; i <= numLocations; i++) {
        let expectedAverageGoldMiniing = Number(input[index]);
        index++
        let daysForMining = Number(input[index]);
        index++

        let goldMineFromLocation = 0
        let averageGoldMining = 0

        for (let j = 0; j < daysForMining; j++) {
            let goldMiningPerDay = Number(input[index]);
            index++
            goldMineFromLocation += goldMiningPerDay;
            averageGoldMining = goldMineFromLocation / daysForMining
        }
        if (averageGoldMining >= expectedAverageGoldMiniing) {
            console.log(`Good job! Average gold per day: ${(averageGoldMining).toFixed(2)}.`)
        } else {
            console.log(`You need ${(expectedAverageGoldMiniing-(averageGoldMining)).toFixed(2)} gold.`)
        }
    }
}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"
])
goldMine (["1",
"5",
"3",
"10",
"1",
"3"])
