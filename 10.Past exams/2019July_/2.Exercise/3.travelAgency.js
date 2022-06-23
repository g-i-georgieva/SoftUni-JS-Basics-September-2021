function travelAgency(input) {
    let nameCity = input[0];
    let typePackage = input[1];
    let vip = input[2];
    let numDays = Number(input[3]);
    let pricePerDay = 0
    let vipPercent = 0

    switch (nameCity) {
        case "Bansko":
        case "Borovets":
            switch (typePackage) {
                case "noEquipment":
                    pricePerDay = 80
                    vipPercent = 5
                    break;
                case "withEquipment":
                    pricePerDay = 100
                    vipPercent = 10
                    break;
                default:
                    console.log(`Invalid input!`)
                    break;
            }
            break;
        case "Varna":
        case "Burgas":
            switch (typePackage) {
                case "noBreakfast":
                    pricePerDay = 100
                    vipPercent = 7
                    break;
                case "withBreakfast":
                    pricePerDay = 130
                    vipPercent = 12
                    break;
                default:
                    console.log(`Invalid input!`)
                    break;
            }
            break;
        default:
            console.log(`Invalid input!`)
            break;
    }

    let totalPrice = 0
    if (numDays > 7) {
        numDays = numDays - 1
    }

    if (vip === "yes") {
        totalPrice = numDays * pricePerDay
        totalPrice = totalPrice * (100 - vipPercent) / 100
    } else {
        totalPrice = numDays * pricePerDay
    }

    if (numDays < 1) {
        console.log(`Days must be positive number!`)
    } else if (numDays >= 1 && totalPrice > 0) {
        console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`)
    }
}
travelAgency(["Gabrovo", "noBreakfast", "no", 3])