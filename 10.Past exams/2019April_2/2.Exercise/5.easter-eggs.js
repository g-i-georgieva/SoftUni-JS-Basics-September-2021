function easterEggs(input) {
    let index = 0
    let numEggs = Number(input[index]);
    index++

    let redEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;
    let orangeEggs = 0
    let maxEggs = Number.MIN_SAFE_INTEGER
    let maxEggsColor = ""


    for (let i = 0; i < numEggs; i++) {
        let currentEgg = input[index]
        index++

        if (currentEgg === "blue") {
            blueEggs++
            if (blueEggs > maxEggs) {
                maxEggs = blueEggs
                maxEggsColor = "blue"
            }
        } else if (currentEgg === "red") {
            redEggs++
            if (redEggs > maxEggs) {
                maxEggs = redEggs
                maxEggsColor = "red"
            }
        } else if (currentEgg === "orange") {
            orangeEggs++
            if (orangeEggs > maxEggs) {
                maxEggs = orangeEggs
                maxEggsColor = "orange"
            }
        } else if (currentEgg === "green") {
            greenEggs++
            if (greenEggs > maxEggs) {
                maxEggs = greenEggs
                maxEggsColor = "green"
            }
        }
    }
    console.log(`Red eggs: ${redEggs}`)
    console.log(`Orange eggs: ${orangeEggs}`)
    console.log(`Blue eggs: ${blueEggs}`)
    console.log(`Green eggs: ${greenEggs}`)
    console.log(`Max eggs: ${maxEggs} -> ${maxEggsColor}`)
}
easterEggs([7, "orange", "blue", "green", "green", "blue", "red", "green"])