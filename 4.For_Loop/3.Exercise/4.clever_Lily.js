function solve(input) {
    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let priceToy = Number(input[2]);
    let sumMoney = 0
    let sumToys = 0
    let savedMoney = 0
    let money = 10

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            sumMoney += money
            money += 10
            sumMoney -=1
        } else {
            sumToys++
        }
    }
    let moneyToys = sumToys * priceToy
    savedMoney = moneyToys + sumMoney

    if (savedMoney >= priceWashingMachine) {
        console.log(`Yes! ${(savedMoney-priceWashingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashingMachine-savedMoney).toFixed(2)}`);
    }
}
solve(["10",
    "170.00",
    "6"
])