function excursionCalculator(input) {
    let numPeople = Number(input[0]);
    let season = input[1];
    let price = 0

    if (numPeople <= 5) {
        switch (season) {
            case "spring":
                price = 50
                break;
            case "summer":
                price = 48.50
                break;
            case "autumn":
                price = 60
                break;
            case "winter":
                price = 86
                break;
        }
    } else {
        switch (season) {
            case "spring":
                price = 48
                break;
            case "summer":
                price = 45
                break;
            case "autumn":
                price = 49.5
                break;
            case "winter":
                price = 85
                break;
        }
    }
    if (season == "summer") {
        price = price * 0.85
    }

    if (season == "winter") {
        price = price + (price*0.08)
    }
    console.log(`${(price*numPeople).toFixed(2)} leva.`);
}

excursionCalculator([5, "spring"])
excursionCalculator([10, "summer"])
excursionCalculator([15, "autumn"])
excursionCalculator([20, "winter"])