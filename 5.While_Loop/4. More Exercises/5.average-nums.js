function averageNums(input) {
    index = 0
    let n = Number(input[index]);
    index++

    let count = 0
    let result = 0

    while (count <= n) {
        let nums = Number(input[index])
        count++
        result += nums

        if (count === n) {
            console.log((result / n).toFixed(2))
        }
        index++

    }

}
averageNums([4, 3, 2, 4, 2])
averageNums([2,6,4])
averageNums([3,82,43,22])
averageNums([4,95,23,76,23])