function aluminumJoinery(input) {
    let numJoinery = Number(input[0]);
    let typeJoinery = input[1];
    let typeReceive = input[2]
    let price = 0
    let totalPrice = 0

    if (numJoinery >= 10) {
        switch (typeJoinery) {
            case "90X130":
                price = 110
                if (numJoinery > 60) {
                    price = 110 * 0.92
                } else if (numJoinery > 30) {
                    price = 110 * 0.95
                }
                break;
            case "100X150":
                price = 140
                if (numJoinery > 80) {
                    price = 140 * 0.90
                } else if (numJoinery > 40) {
                    price = 140 * 0.94
                }
                break;
            case "130X180":
                price = 190
                if (numJoinery > 50) {
                    price = 190 * 0.88
                } else if (numJoinery > 20) {
                    price = 190 * 0.93
                }
                break;
            case "200X300":
                price = 250
                if (numJoinery > 50) {
                    price = 250 * 0.86
                } else if (numJoinery > 25) {
                    price = 250 * 0.91
                }
                break;
        }
    } else if (numJoinery < 10) {
        console.log("Invalid order");
    }
    totalPrice = price * numJoinery

    if (typeReceive === "With delivery") {
        totalPrice += 60
    }
    if (numJoinery >= 99) {
        totalPrice = totalPrice * 0.96
    }
    if (numJoinery >= 10)
        console.log(`${totalPrice.toFixed(2)} BGN`);
}
aluminumJoinery(["40", "90X130", "Without delivery"])
aluminumJoinery(["105", "100X150", "With delivery"])
aluminumJoinery(["2", "130X180", "With delivery"])