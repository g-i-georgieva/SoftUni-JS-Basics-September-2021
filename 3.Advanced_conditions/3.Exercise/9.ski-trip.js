function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let grade = input[2];
    let price = 0
    let nights = days - 1

    switch (room) {
        case "room for one person":
            price = 18 * nights
            break;
        case "apartment":
            price = 25
            if (nights < 10) {
                price = price * nights * 0.7
            } else if (nights >= 10 && nights <= 15) {
                price = price * nights * 0.65
            } else {
                price = price * nights * 0.5
            }
            break;
        case "president apartment":
            price = 35
            if (nights < 10) {
                price = price * nights * 0.9
            } else if (nights >= 10 && nights <= 15) {
                price = price * nights * 0.85
            } else {
                price = price * nights * 0.8
            }
            break;

    }

    if (grade == "positive") {
        price = (price * 0.25)+price
    } else if (grade == "negative") {
        price = price * 0.90
    }

    console.log(`${(price).toFixed(2)}`);
}

skiTrip(["14",
    "apartment",
    "positive"
])
skiTrip(["30",
    "president apartment",
    "negative"
])
skiTrip (["12",
"room for one person",
"positive"])
skiTrip (["2",
"apartment",
"positive"])
