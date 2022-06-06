function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let sum = 0
    country = ""
    let accomodation = "";

    if (budget <= 100) {
        country = "Bulgaria"
        switch (season) {
            case "summer":
                sum = budget * 0.30
                accomodation = "Camp"
                break;
            case "winter":
                sum = budget * 0.70
                accomodation = "Hotel"
                break;
        }
    } else if (budget <= 1000) {
        country = "Balkans"
        switch (season) {
            case "summer":
                sum = budget * 0.40
                accomodation = "Camp"
                break;
            case "winter":
                sum = budget * 0.80
                accomodation = "Hotel"
                break;
        }
    } else {
        country = "Europe"
        accomodation = "Hotel"
        sum = budget * 0.90
    }

    console.log(`Somewhere in ${country}`)
    console.log(`${accomodation} - ${(sum).toFixed(2)}`)
}

journey(["50", "summer"])
journey(["75", "winter"])
journey(["312", "summer"])
journey(["678.53", "winter"])
journey(["1500", "summer"])