function renovation(input) {
    let index = 0
    let wallHeight = Number(input[index])
    index++
    let wallwidth = Number(input[index]);
    index++
    let percentNotForPaint = Number(input[index]);
    index++
    let wallsForPainting = 4 * wallHeight * wallwidth
    let totalWalls = Math.ceil(wallsForPainting * (100 - percentNotForPaint) / 100)
    let command = input[index];
    index++

    while (command !== "Tired!") {
        let currentLiters = Number(command)

        totalWalls -= currentLiters

        if (totalWalls <= 0) {
            break;
        }

        command = input[index]
        index++
    }

    if (command === "Tired!") {
        console.log(`${totalWalls} quadratic m left.`)
    } else if (totalWalls < 0) {
        console.log(`All walls are painted and you have ${Math.abs(totalWalls)} l paint left!`)
    } else if (totalWalls === 0) {
        console.log(`All walls are painted! Great job, Pesho!`)
    }

}
renovation([3,5,10,2,3,4,"Tired!"])