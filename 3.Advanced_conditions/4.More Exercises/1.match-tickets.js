function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let group = Number(input[2]);
    let transport = 0;
    let moneyForTickets = 0
    let ticketPrice = 0
    let transportPrice = 0
    let totalSpendMOney = 0

    switch (category) {
        case "VIP":
            ticketPrice = 499.99
            if (group >= 1 && group <= 4) {
                transport = 75;
            } else if (group >= 5 && group <= 9) {
                transport = 60;
            } else if (group >= 10 && group <= 24) {
                transport = 50;
            } else if (group >= 25 && group <= 49) {
                transport = 40;
            } else if (group >= 50) {
                transport = 25
            }
            break;
        case "Normal":
            ticketPrice = 249.99
            if (group >= 1 && group <= 4) {
                transport = 75;
            } else if (group >= 5 && group <= 9) {
                transport = 60;
            } else if (group >= 10 && group <= 24) {
                transport = 50;
            } else if (group >= 25 && group <= 49) {
                transport = 40;
            } else if (group >= 50) {
                transport = 25
                break;
            }
    }
    moneyForTickets = group * ticketPrice
    transportPrice = budget * transport / 100
    totalSpendMOney = moneyForTickets + transportPrice

    if (totalSpendMOney <= budget) {
        console.log(`Yes! You have ${(budget-totalSpendMOney).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(totalSpendMOney-budget).toFixed(2)} leva.`)
    }
}
matchTickets([1000, "Normal", 1])