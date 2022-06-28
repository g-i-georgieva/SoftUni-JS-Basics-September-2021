function balls(input) {
    let index = 0
    let numBalls = Number(input[index])
    index++

    let points = 0
    let countRed = 0
    let countOrange = 0
    let countYellow = 0
    let countWhite = 0
    let countBlack = 0
    let countOthers = 0

    for (let i = 0; i < numBalls; i++) {
        let currentBall = input[index]
        index++
        if (currentBall === "red") {
            countRed++
            points += 5
        } else if (currentBall === "orange") {
            countOrange++
            points += 10
        } else if (currentBall === "yellow") {
            countYellow++
            points += 15

        } else if (currentBall === "white") {
            countWhite++
            points += 20
        } else if (currentBall === "black") {
            countBlack++
            points /= 2
        } else {
            countOthers++
            points = points
        }

    }

    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Points from red balls: ${countRed}`)
    console.log(`Points from orange balls: ${countOrange}`)
    console.log(`Points from yellow balls: ${countYellow}`)
    console.log(`Points from white balls: ${countWhite}`)
    console.log(`Other colors picked: ${countOthers}`)
    console.log(`Divides from black balls: ${countBlack}`)
}
balls([10,"white","white","ee","red","orange","red","black","black","black","black"])