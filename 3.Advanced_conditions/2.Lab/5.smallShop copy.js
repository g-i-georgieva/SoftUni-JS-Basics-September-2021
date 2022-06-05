function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let price = 0

    if (product == "coffee") {
        if (city == "Sofia") {
            price = 0.5;
        } else if (city == "Plovdiv") {
            price = 0.4;
        } else if (city == "Varna")
            price = 0.45;
    } else if (product == "water") {
        if (city == "Sofia") {
            price = 0.8;
        } else if (city == "Plovdiv") {
            price = 0.7;
        } else if (city == "Varna")
            price = 0.7;
    } else if (product == "beer") {
        if (city == "Sofia") {
            price = 1.20;
        } else if (city == "Plovdiv") {
            price = 1.15;
        } else if (city == "Varna")
            price = 1.10;
    } else if (product == "sweets") {
        if (city == "Sofia") {
            price = 1.45;
        } else if (city == "Plovdiv") {
            price = 1.30;
        } else if (city == "Varna")
            price = 1.35;
    } else if (product == "peanuts") {
        if (city == "Sofia") {
            price = 1.6;
        } else if (city == "Plovdiv") {
            price = 1.5;
        } else if (city == "Varna")
            price = 1.55;
    }
    let sum = quantity * price
    console.log(sum);
}

smallShop(["coffee",
    "Varna",
    "2"
])
smallShop(["peanuts",
    "Plovdiv",
    "1"
])
smallShop(["beer",
    "Sofia",
    "6"
])
smallShop(["water",
    "Plovdiv",
    "3"
])
smallShop(["sweets",
    "Sofia",
    "2.23"
])