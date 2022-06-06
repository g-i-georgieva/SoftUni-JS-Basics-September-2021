function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let priceApp = 0
    let priceStudio = 0

    switch (month) {
        case "May":
        case "October":
            priceApp = 65 * nights
            priceStudio = 50 * nights
            if (nights > 7 && nights <= 14) {
                priceStudio = priceStudio * 0.95
            } else if (nights > 14) {
                priceStudio = priceStudio * 0.70
                priceApp = priceApp * 0.90
            }
            break;
        case "June":
        case "September":
            priceApp = 68.7 * nights
            priceStudio = 75.2 * nights
            if (nights > 14) {
                priceStudio = priceStudio * 0.80
                priceApp = priceApp * 0.90
            }
            break;
        case "July":
        case "August":
            priceApp = 77 * nights
            priceStudio = 76 * nights
            if (nights > 14) {
                priceApp = priceApp * 0.90
            }
            break;
    }
console.log(`Apartment: ${(priceApp).toFixed(2)} lv.`);
console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
}

hotelRoom(["May",
    "15"
])
hotelRoom(["June",
    "14"
])
hotelRoom (["August",
"20"])
