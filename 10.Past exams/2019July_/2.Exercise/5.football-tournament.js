function football(input) {
    let index = 0;
    let footballPlayer = input[index];
    index++
    let numMeetings = Number(input[index]);
    index++
    let countW = 0;
    let countD = 0;
    let countL = 0
    let points = 0

    for (let i = 0; i < numMeetings; i++) {
        let currResult = input[index];
        index++

        if (currResult === "W") {
            countW++
            points += 3
        } else if (currResult === "D") {
            countD++
            points += 1
        } else if (currResult === "L")
            countL++

    }
    if (numMeetings === 0) {
        console.log(`${footballPlayer} hasn't played any games during this season.`)
    } else {
        console.log(`${footballPlayer} has won ${points} points during this season.`)
        console.log(`Total stats:`)
        console.log(`## W: ${countW}`)
        console.log(`## D: ${countD}`)
        console.log(`## L: ${countL}`)
        console.log(`Win rate: ${(countW/numMeetings*100).toFixed(2)}%`)
    }
}
football(["Chelsea", 0])