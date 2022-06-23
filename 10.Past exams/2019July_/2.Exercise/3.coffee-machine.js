function coffeMachine(input) {
    let typeDrink = input[0];
    let sugar = input[1];
    let numDrinks = Number(input[2]);

    let price = 0;

    switch (typeDrink) {
        case "Espresso":
            switch (sugar) {
                case "Without":
                    price = 0.9 * 0.65
                    break;
                case "Normal":
                    price = 1
                    break;
                case "Extra":
                    price = 1.2
                    break;
            }
            break;
        case "Cappuccino":
            switch (sugar) {
                case "Without":
                    price = 1 * 0.65
                    break;
                case "Normal":
                    price = 1.2
                    break;
                case "Extra":
                    price = 1.6
                    break;
            }
            break;
        case "Tea":
            switch (sugar) {
                case "Without":
                    price = 0.5 * 0.65
                    break;
                case "Normal":
                    price = 0.6
                    break;
                case "Extra":
                    price = 0.7
                    break;
            }
            break;
    }

    if (typeDrink === "Espresso" && numDrinks >= 5) {
        price = price * 0.75
    }

    let totalPrice = price * numDrinks

    if (totalPrice > 15) {
        totalPrice = totalPrice * 0.80
    }

    console.log (`You bought ${numDrinks} cups of ${typeDrink} for ${(totalPrice).toFixed(2)} lv.`)
}
coffeMachine(["Espresso", "Without", 10])