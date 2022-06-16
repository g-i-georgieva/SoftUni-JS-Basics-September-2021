function combinations(input) {
    let n = Number(input[0]);
    let combinations = 0

    for (let i = 0; i <= 25; i++) {
        for (let j = 0; j <= 25; j++) {
            for (let k = 0; k <= 25; k++) {
                if (i + j + k === n) {
                    combinations++
                }

            }

        }

    }
    console.log(combinations)
}
combinations([25])