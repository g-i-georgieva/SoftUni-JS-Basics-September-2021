function bikeRace(input) {
    let numJunior = Number(input[0]);
    let numSenior = Number(input[1]);
    let typeRace = input[2];
    let priceJunior = 0
    let priceSenior = 0
    let money = 0

    switch (typeRace) {
        case "trail":
            priceJunior = 5.5;
            priceSenior = 7;
            break;
        case "cross-country":
            priceJunior = 8;
            priceSenior = 9.5;
            break;
        case "downhill":
            priceJunior = 12.25;
            priceSenior = 13.75;
            break;
        case "road":
            priceJunior = 20;
            priceSenior = 21.5;
            break;
    }

    money = priceSenior * numSenior + priceJunior * numJunior

    if (typeRace === "cross-country" && numJunior + numSenior >= 50) {
        money=money*0.75
    }

    let moneyAfterCosts=money*0.95

    console.log (moneyAfterCosts.toFixed(2))


}
bikeRace([10, 20, "trail"])