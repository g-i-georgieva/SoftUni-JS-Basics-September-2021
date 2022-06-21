function OscarWeekInCinema(input) {
    let nameMovie = input[0];
    let typeHall = input[1];
    let numTickets = Number(input[2])
    let priceTicket = 0

    switch (nameMovie) {
        case "A Star Is Born":
            switch (typeHall) {
                case "normal":
                    priceTicket = 7.50
                    break;
                case "luxury":
                    priceTicket = 10.50
                    break;
                case "ultra luxury":
                    priceTicket = 13.50
                    break;
            }
            break;
        case "Bohemian Rhapsody":
            switch (typeHall) {
                case "normal":
                    priceTicket = 7.35
                    break;
                case "luxury":
                    priceTicket = 9.45
                    break;
                case "ultra luxury":
                    priceTicket = 12.75
                    break;
            }
            break;
        case "Green Book":
            switch (typeHall) {
                case "normal":
                    priceTicket = 8.15
                    break;
                case "luxury":
                    priceTicket = 10.25
                    break;
                case "ultra luxury":
                    priceTicket = 13.25
                    break;
            }
            break;
        case "The Favourite":
            switch (typeHall) {
                case "normal":
                    priceTicket = 8.75
                    break;
                case "luxury":
                    priceTicket = 11.55
                    break;
                case "ultra luxury":
                    priceTicket = 13.95
                    break;
            }
            break;
    }

    let totalProfit = priceTicket * numTickets

    console.log(`${nameMovie} -> ${totalProfit.toFixed(2)} lv.`)
}
OscarWeekInCinema(["A Star Is Born", "luxury", 42])