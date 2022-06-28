function agencyProfit(input) {
    let nameAirLine = input[0];
    let numTicketsAdult = Number(input[1]);
    let numTicketsChild = Number(input[2]);
    let priceTicketAdult = Number(input[3]);
    let priceService = Number(input[4]);

    let priceTicketsChild = priceTicketAdult * 0.3
    let priceChildService = priceTicketsChild + priceService
    let priceAdultService = priceTicketAdult + priceService
    let totalPrice =priceAdultService*numTicketsAdult+priceChildService*numTicketsChild
    let profit=totalPrice*0.2

    console.log(`The profit of your agency from ${nameAirLine} tickets is ${profit.toFixed(2)} lv.`);
}

agencyProfit(["WizzAir", "15", "5", "120", "40"]);
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);