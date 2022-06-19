function maidenParty(input) {
    let priceMaidenParty = Number(input[0]);
    let numLoveMassages = Number(input[1]);
    let numRoses = Number(input[2]);
    let numKeyHoleders = Number(input[3]);
    let numCaricatures = Number(input[4]);
    let numNuckSurprises = Number(input[5]);

    let profit = numLoveMassages * 0.60 + numRoses * 7.20 + numKeyHoleders * 3.60 + numCaricatures * 18.20 + numNuckSurprises * 22
    let countProductd = numNuckSurprises + numLoveMassages + numKeyHoleders + numCaricatures

    if (countProductd >= 25) {
        profit = profit * 0.65
    }

    let profitWithoutHosting=profit*0.90

    let diff = Math.abs(profitWithoutHosting-priceMaidenParty)
    if (profitWithoutHosting>=priceMaidenParty){
        console.log (`Yes! ${diff.toFixed(2)} lv left.`)
    }else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}

maidenParty(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"
])
maidenParty(["320",
    "8",
    "2",
    "5",
    "5",
    "1"
])