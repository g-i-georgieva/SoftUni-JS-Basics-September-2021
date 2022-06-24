function pcGameShop(input) {
    let index = 0
    let numSoldGames = Number(input[index])
    index++
    let countHeart = 0
    let countFortnite = 0;
    let countOverwath = 0
    let countOthers = 0

    for (let i = 0; i < numSoldGames; i++) {
        let currGame = input[index];
        index++
        if (currGame === "Hearthstone") {
            countHeart++
        } else if (currGame === "Fornite") {
            countFortnite++
        } else if (currGame === "Overwatch") {
            countOverwath++
        } else {
            countOthers++
        }
    }

    console.log(`Hearthstone - ${(countHeart/numSoldGames*100).toFixed(2)}%`)
    console.log(`Fornite - ${(countFortnite/numSoldGames*100).toFixed(2)}%`)
    console.log(`Overwatch - ${(countOverwath/numSoldGames*100).toFixed(2)}%`)
    console.log(`Others - ${(countOthers/numSoldGames*100).toFixed(2)}%`)
}
pcGameShop([4, "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"])