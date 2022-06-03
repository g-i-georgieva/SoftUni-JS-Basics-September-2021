function transportPrice(input) {
    let n = Number(input[0]);
    let partOfDay = input[1];

    let taxiPriceDay = 0.70 + 0.79 * n;
    let taxiPriceNight = 0.70 + 0.90 * n;
    let busPriceDayNight = 0.09 * n;
    let trainPriceDayNight = 0.06 * n;
    let price = 0

    if (n < 20) {
        if (partOfDay === "day") {
            price = taxiPriceDay
        } else {
            price = taxiPriceNight
        }
    } else if (n >= 20 && n < 100) {
        price = busPriceDayNight
    } else if (n >= 100) {
        price = trainPriceDayNight
    }

    console.log(price.toFixed(2))

}
transportPrice([5, "day"])