function equalPairs(input) {
    index = 0;
    let pairs = Number(input[index]);
    index++
    let sum = 0
    let max = Number.MAX_SAFE_INTEGER
    let min = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < pairs; i++) {
        let num1 = Number(input[index]);
        index++
        let num2 = Number(input[index]);
        index++

        sum = num1 + num2

        if (sum > min) {
            min = sum
        }

        if (sum < max) {
            max = sum
        }

    }

    if (min != max) {
        console.log(`No, maxdiff=${Math.abs(max-min)}`);
    } else {
        console.log(`Yes, value=${(sum)}`);
    }


}

equalPairs([7,34,-33,52,12,-32,32,23,41,7,25,34,23,124,21])
