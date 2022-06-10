function tennis(input) {
    let index = 0
    let numTournirs = Number(input[index]);
    index++
    let startPoints = Number(input[index]);
    index++
    let points = 0
    let countW = 0

    for (let i = 0; i < numTournirs; i++) {
        let position = input[index];
        index++

        if (position === "W") {
            points += 2000
            countW++
        } else if (position === "F") {
            points += 1200
        } else if (position === "SF") {
            points += 720
        }
    }

    console.log(`Final points: ${points+startPoints}`);
    console.log(`Average points: ${Math.floor(points/numTournirs)}`)
    console.log(`${(countW/numTournirs*100).toFixed(2)}%`);
}

tennis(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"
])

tennis (["4",
"750",
"SF",
"W",
"SF",
"W"])
