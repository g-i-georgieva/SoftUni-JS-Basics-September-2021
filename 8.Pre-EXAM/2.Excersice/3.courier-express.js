function courierExpress(input) {
    let packageKg = Number(input[0]);
    let typeService = input[1];
    let distance = Number(input[2]);

    let pricePerKm = 0;

    if (packageKg < 1) {
        switch (typeService) {
            case "standard":
                pricePerKm = 3
                break;
            case "express":
                pricePerKm = 3 + (3 * 0.80) * packageKg
                break;
        }
    } else if (packageKg >= 1 && packageKg < 10) {
        switch (typeService) {
            case "standard":
                pricePerKm = 5
                break;
            case "express":
                pricePerKm = 5 + (5 * 0.40) * packageKg
                break;
        }
    } else if (packageKg >= 10 && packageKg < 40) {
        switch (typeService) {
            case "standard":
                pricePerKm = 10
                break;
            case "express":
                pricePerKm = 10 + (10 * 0.05) * packageKg
                break;
        }
    } else if (packageKg >= 40 && packageKg < 90) {
        switch (typeService) {
            case "standard":
                pricePerKm = 15
                break;
            case "express":
                pricePerKm = 15 + (15 * 0.02) * packageKg
                break;
        }
    } else if (packageKg >= 90 && packageKg < 150) {
        switch (typeService) {
            case "standard":
                pricePerKm = 20
                break;
            case "express":
                pricePerKm = 20 + (20 * 0.01) * packageKg
                break;
        }
    }
    let priceInLeva = pricePerKm / 100
    let totalPrice = priceInLeva * distance
    console.log(`The delivery of your shipment with weight of ${packageKg.toFixed(3)} kg. would cost ${(totalPrice).toFixed(2)} lv.`)
}

courierExpress(["87",
    "express",
    "130"
])
courierExpress(["20", 
"standard",
"349"])
courierExpress(["1.5",
"standard",
"100"])

