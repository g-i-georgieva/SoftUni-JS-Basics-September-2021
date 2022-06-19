function uniqueCode(input) {
    let limitFirst = Number(input[0]);
    let limitSecond = Number(input[1]);
    let limitThird = Number(input[2]);


    for (let first = 1; first <= limitFirst; first++) {
        for (let second = 2; second <= limitSecond; second++) {
            for (let third = 1; third <= limitThird; third++) {
                let result = `${first} ${second} ${third}`

                if (first % 2 === 0 && third % 2 == 0 && (second !== 4 && second !== 6)) {
                    console.log(result)
                }
            }
        }
    }
}
uniqueCode(["3",
    "5",
    "5"
])

uniqueCode(["8",
    "2",
    "8"
])