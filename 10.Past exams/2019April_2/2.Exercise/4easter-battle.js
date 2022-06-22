function eggsBattle(input) {
    let index = 0
    let firstPlayerEggs = Number(input[index]);
    index++
    let secondPlayerEggs = Number(input[index])
    index++

    let command = input[index];
    index++


    while (command !== "End of battle") {
        let currentWinner = command;
    
        if (currentWinner === "one") {
            secondPlayerEggs--
        } else {
            firstPlayerEggs--
        }

        if (firstPlayerEggs === 0) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
            break;
        }
        if (secondPlayerEggs === 0) {
            console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`)
            break;
        }

        command = input[index];
        index++

    }

    if (command === "End of battle") {
        console.log(`Player one has ${firstPlayerEggs} eggs left.`)
        console.log(`Player two has ${secondPlayerEggs} eggs left.`)
    }

}
eggsBattle([5, 4, "one", "two", "one", "two", "two", "End of battle"])
eggsBattle ([2,6,"one","two","two"])