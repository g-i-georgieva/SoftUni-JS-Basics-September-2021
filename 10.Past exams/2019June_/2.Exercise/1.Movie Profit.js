function movieProfit(input) {
    let movieName = input[0];
    let numDays = Number(input[1]);
    let numTickets = Number(input[2]);
    let priceTicket = Number(input[3]);
    let percentCinema = Number(input[4]);

    let profit = numDays * numTickets * priceTicket
    let profitCinema = profit * percentCinema / 100
    let netProfit = profit - profitCinema

    console.log (`The profit from the movie ${movieName} is ${netProfit.toFixed(2)} lv.`)
}
movieProfit(["The Programmer", 20, 500, 7.50, 7])