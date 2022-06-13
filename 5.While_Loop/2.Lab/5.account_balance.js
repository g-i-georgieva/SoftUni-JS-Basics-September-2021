function accountBalance(input) {
    let index = 0
    let currentInput = input[index];
    let sum = 0

    while (currentInput !== "NoMoreMoney") {
        let inputAsNumber = Number(currentInput)

        if (inputAsNumber < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        sum += inputAsNumber
        console.log(`Increase: ${inputAsNumber.toFixed(2)}`);
        index++
        currentInput = input[index]
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"
])

accountBalance(["120",
    "45.55",
    "-150"
])