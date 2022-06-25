function fitnessCard(input) {
    let budget = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let price = 0

    switch (sport) {
        case "Gym":
            switch (sex) {
                case "m":
                    price = 42
                    break;
                case "f":
                    price = 35
                    break;
            }
            break;
        case "Boxing":
            switch (sex) {
                case "m":
                    price = 41
                    break;
                case "f":
                    price = 37
                    break;
            }
            break;
        case "Yoga":
            switch (sex) {
                case "m":
                    price = 45
                    break;
                case "f":
                    price = 42
                    break;
            }
            break;
        case "Zumba":
            switch (sex) {
                case "m":
                    price = 34
                    break;
                case "f":
                    price = 31
                    break;
            }
            break;
        case "Dances":
            switch (sex) {
                case "m":
                    price = 51
                    break;
                case "f":
                    price = 53
                    break;
            }
            break;
        case "Pilates":
            switch (sex) {
                case "m":
                    price = 39
                    break;
                case "f":
                    price = 37
                    break;
            }
            break;
    }

    if (age <= 19) {
        price = price * 0.80
    }

    if (price<=budget){
        console.log (`You purchased a 1 month pass for ${sport}.`)
    }else {
        console.log (`You don't have enough money! You need $${(price-budget).toFixed(2)} more.`)
    }
}
fitnessCard([50, "m", 23, "Gym"])