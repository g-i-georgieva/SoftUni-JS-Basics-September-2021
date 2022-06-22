function paintingEggs(input) {
    let sizeEggs = input[0];
    let colorEggs = input[1];
    let numPartidi = Number(input[2]);

    let pricePartida = 0

    switch (sizeEggs) {
        case "Large":
            switch (colorEggs) {
                case "Red":
                    pricePartida = 16
                    break;
                case "Green":
                    pricePartida = 12
                    break;
                case "Yellow":
                    pricePartida = 9
                    break;

            }
            break;
        case "Medium":
            switch (colorEggs) {
                case "Red":
                    pricePartida = 13
                    break;
                case "Green":
                    pricePartida = 9
                    break;
                case "Yellow":
                    pricePartida = 7
                    break;

            }
            break;
        case "Small":
            switch (colorEggs) {
                case "Red":
                    pricePartida = 9
                    break;
                case "Green":
                    pricePartida = 8
                    break;
                case "Yellow":
                    pricePartida = 5
                    break;
            }
            break;
    }
    let price = numPartidi*pricePartida
    let totalPrice = price*0.65
    console.log (`${(totalPrice).toFixed(2)} leva.`)
}
paintingEggs(["Large", "Red", 7])