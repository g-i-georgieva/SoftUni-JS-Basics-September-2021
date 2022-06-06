function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let priceApp = 0
    let priceStudio = 0

    if (month == "May" || month == "October") {
        priceStudio = 50
        priceApp = 65
        if (nights > 7 && nights <= 14) {
            priceStudio = priceStudio * 0.95
        } else if (nights > 14) {
            priceStudio = priceStudio * 0.7;
            priceApp = priceApp * 0.90
        }
    }
    if (month == "June" || month == "September") {
        priceStudio = 75.2
        priceApp = 68.7
        if (nights > 14) {
            priceStudio = priceStudio * 0.80;
            priceApp = priceApp * 0.90
        }
    }
    if (month == "July" || month == "August") {
        priceStudio = 76
        priceApp = 77
        if (nights>14){
            priceApp=priceApp*0.90
        }
    }

    let finalApp = nights*priceApp
    let finalStudio=nights*priceStudio

    console.log(`Apartment: ${(finalApp).toFixed(2)} lv.`);
    console.log(`Studio: ${(finalStudio).toFixed(2)} lv.`);
}

hotelRoom(["May",
    "15"
])
hotelRoom(["June",
    "14"
])
hotelRoom(["August",
    "20"
])