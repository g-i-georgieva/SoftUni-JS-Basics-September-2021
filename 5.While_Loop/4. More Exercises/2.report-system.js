function reportSystem(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let command = input[index];
    index++
    let counter = 0;
    let cashCounter = 0;
    let cardCounter = 0;
    let moneySaved = 0;
    let cashMoney = 0;
    let cardMoney = 0;

    while (command !== "End") {
        let productPrice = Number(command);
        counter++;

        if (counter % 2 === 0) {
            if (productPrice <= 10) {
                moneySaved += 0
                console.log(`Error in transaction!`);
            } else {
                cardCounter++;
                cardMoney += productPrice;
                moneySaved += productPrice;
                console.log(`Product sold!`);
            }
        } else {
            if (productPrice > 100) {
                moneySaved += 0
                console.log(`Error in transaction!`);
            } else {
                cashCounter++
                cashMoney += productPrice;
                moneySaved += productPrice;
                console.log(`Product sold!`);
            }
        }

        if (moneySaved >= neededMoney) {
            break;
        }

        command = input[index];
        index++
    }
    if (moneySaved < neededMoney) {
        console.log(`Failed to collect required money for charity.`)
    } else {
        console.log(`Average CS: ${(cashMoney/cashCounter).toFixed(2)}`);
        console.log(`Average CC: ${(cardMoney/cashCounter).toFixed(2)}`);
    }
}
reportSystem([500, 120, 8, 63, 256, 78, 317])
reportSystem([600, 86, 150, 98, 227, "End"])