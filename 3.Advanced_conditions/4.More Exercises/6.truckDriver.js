function truckDriver(input) {
    let season = input[0];
    let kmMonth = Number(input[1]);
    let singlePrice = 0;

    switch (season) {
        case "Spring":
        case "Autumn":
            if (kmMonth <= 5000) {
                singlePrice = 0.75
            } else if (kmMonth > 5000 && kmMonth <= 10000) {
                singlePrice = 0.95
            } else if (kmMonth > 10000 && kmMonth <= 20000) {
                singlePrice = 1.45
            }
            break;
        case "Summer":
            if (kmMonth <= 5000) {
                singlePrice = 0.90
            } else if (kmMonth > 5000 && kmMonth <= 10000) {
                singlePrice = 1.1
            } else if (kmMonth > 10000 && kmMonth <= 20000) {
                singlePrice = 1.45
            }
            break;
        case "Winter":
            if (kmMonth <= 5000) {
                singlePrice = 1.05
            } else if (kmMonth > 5000 && kmMonth <= 10000) {
                singlePrice = 1.25
            } else if (kmMonth > 10000 && kmMonth <= 20000) {
                singlePrice = 1.45
            }
    }

    let totalMoney = singlePrice * kmMonth*4
    let totalMoneyTaxes=totalMoney*0.90

    console.log(totalMoneyTaxes.toFixed(2))
}
truckDriver(["Summer", 3455])