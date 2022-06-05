function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let price = 0
    
    if (product == "coffee") {
        switch (city) {
            case "Sofia":
                price = quantity *0.5;
                break;
            case "Plovdiv":
                price =quantity * 0.4;
                break;
            case "Varna":
                price = quantity *0.45;
                break;
        }
    } else if (product == "water") {
        switch (city) {
            case "Sofia":
                price = quantity *0.8;
                break;
            case "Plovdiv":
                price = quantity *0.7;
                break;
            case "Varna":
                price = quantity *0.7;
                break;
        }
    } else if (product == "beer") {
        switch (city) {
            case "Sofia":
                price = quantity *1.2;
                break;
            case "Plovdiv":
                price = quantity *1.15;
                break;
            case "Varna":
                price = quantity *1.1;
                break;
        }
    } else if (product == "sweets") {
        switch (city) {
            case "Sofia":
                price = quantity *1.45;
                break;
            case "Plovdiv":
                price = quantity *1.30;
                break;
            case "Varna":
                price = quantity *1.35;
                break;
        }
    } else if (product == "peanuts") {
        switch (city) {
            case "Sofia":
                price = quantity *1.6;
                break;
            case "Plovdiv":
                price = quantity *1.5;
                break;
            case "Varna":
                price = quantity *1.55;
                break;
        }

    }
    console.log(price);
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