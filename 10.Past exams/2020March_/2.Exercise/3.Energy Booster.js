function energyBooster(input) {
    let fruit = input[0];
    let sizeSet = input[1];
    let numOrderSets = Number(input[2]);
    let price = 0

    switch (fruit) {
        case "Watermelon":
            switch (sizeSet) {
                case "small":
                    price = 2 * 56
                    break;
                case "big":
                    price = 5 * 28.70
                    break;
            }
            break;
        case "Mango":
            switch (sizeSet) {
                case "small":
                    price = 2 * 36.66
                    break;
                case "big":
                    price = 5 * 19.60
                    break;
            }
            break;
        case "Pineapple":
            switch (sizeSet) {
                case "small":
                    price = 2 * 42.1
                    break;
                case "big":
                    price = 5 * 24.80
                    break;
            }
            break;
        case "Raspberry":
            switch (sizeSet) {
                case "small":
                    price = 2 * 20
                    break;
                case "big":
                    price = 5 * 15.20
                    break;
            }
            break;
    }

    let totalPrice = price * numOrderSets

    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice = totalPrice * 0.85
    } else if (totalPrice > 1000) {
        totalPrice = totalPrice * 0.50
    }

    console.log (`${totalPrice.toFixed(2)} lv.`)
}
energyBooster(["Watermelon", "big", 4])