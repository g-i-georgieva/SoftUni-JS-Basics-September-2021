function touristShop(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let counter = 0;
    let priceCounter = 0;

    while (command !== "Stop") {
        let price = Number(input[index]);
        index++;
        counter++

        if (counter % 3 === 0) {
            price = price / 2
        }

        priceCounter += price;
        budget -= price

        command = input[index];
        index++;

        if (budget < 0) {
            console.log("You don't have enough money!");
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`)
            return;
        }
    }

    console.log(`You bought ${counter} products for ${(priceCounter).toFixed(2)} leva.`)

}
touristShop(["54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"
])