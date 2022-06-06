function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let group = Number(input[2]);
    let rent = 0

    if (season == "Spring") {
        rent = 3000
        if (group <= 6) {
            rent = rent * 0.9
        } else if (group >= 7 && group <= 11) {
            rent = rent * 0.85
        } else {
            rent = rent * 0.75
        }
    } else if (season == "Summer" || season == "Autumn") {
        rent = 4200
        if (group <= 6) {
            rent = rent * 0.9
        } else if (group >= 7 && group <= 11) {
            rent = rent * 0.85
        } else {
            rent = rent * 0.75
        }
    } else if (season == "Winter") {
        rent = 2600
        if (group <= 6) {
            rent = rent * 0.9
        } else if (group >= 7 && group <= 11) {
            rent = rent * 0.85
        } else {
            rent = rent * 0.75
        }
    }

    if (group % 2 === 0 && season !== "Autumn") {
        rent = rent * 0.95
    }

    if (rent <= budget) {
        console.log(`Yes! You have ${(budget-rent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rent-budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["2000",
    "Winter",
    "13"
])