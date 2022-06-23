function familyTrip(input) {
    let budget = Number(input[0]);
    let numNights = Number(input[1]);
    let priceNight = Number(input[2]);
    let additionalCosts = Number(input[3]);

    if (numNights > 7) {
        priceNight = priceNight * 0.95
    }
    let totalAddCosts = budget * additionalCosts / 100
    let totalPrice = numNights * priceNight + totalAddCosts;
    
    if (totalPrice<=budget){
        console.log (`Ivanovi will be left with ${(budget-totalPrice).toFixed(2)} leva after vacation.`)
    }else {
        console.log (`${(totalPrice-budget).toFixed(2)} leva needed.`)
    }
}
familyTrip([800.50, 8, 100, 2])