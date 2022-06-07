function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let accomodation="";
    let location = "";

    switch (season) {
        case "Summer":
            if (budget <= 1000) {
                accomodation = "Camp";
                location = "Alaska"
                budget = budget * 0.65
            } else if (budget > 1000 && budget <= 3000) {
                accomodation = "Hut";
                location = "Alaska"
                budget = budget * 0.80
            } else if (budget > 3000) {
                accomodation = "Hotel";
                location = "Alaska"
                budget = budget * 0.90
            }
            break;
        case "Winter":
            if (budget <= 1000) {
                accomodation = "Camp";
                location = "Morocco"
                budget = budget * 0.45
            } else if (budget > 1000 && budget <= 3000) {
                accomodation = "Hut";
                location = "Morocco"
                budget = budget * 0.60
            } else if (budget > 3000) {
                accomodation = "Hotel";
                location = "Morocco"
                budget = budget * 0.90
            }
            break;
    }

    console.log(`${location} - ${accomodation} - ${(budget).toFixed(2)}`)

}
vacation([800, "Summer"])