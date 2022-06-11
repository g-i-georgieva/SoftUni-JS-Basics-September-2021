function solve(input) {
    let index = 0
    let pairsCount = Number(input[index]);
    index++
    let firstNum = Number(input[index]);
    index++;
    let secondNum = Number(input[index]);
    index++

    let previousSum = firstNum + secondNum;
    let maxDifference = 0;

    for (let i = 1; i < pairsCount; i++) {
        let firstNum = Number(input[index]);
        index++;
        let secondNum = Number(input[index]);
        index++
        let currentSum = firstNum + secondNum;
        let currentDifference = Math.abs(currentSum - previousSum);

        if (currentDifference > maxDifference) {
            maxDifference = currentDifference;
        }
        previousSum = currentSum;
    }
    if (maxDifference === 0) {
        console.log(`Yes, value=${previousSum}`)
    } else {
        console.log(`No, maxdiff=${maxDifference}`);
    }

}

solve([3, 1, 2, 0, 3, 4, -1])