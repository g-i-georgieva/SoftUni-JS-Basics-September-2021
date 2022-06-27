function familyHoliday(input) {
    let budget = Number(input[0]);
    let numNights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percent = Number(input[3]);

    if (numNights > 7) {
        pricePerNight = pricePerNight - (pricePerNight * 5 / 100)
    }

    let needBudget = numNights * pricePerNight
    let additionalCosts = budget * percent / 100;
    let totalBudget = needBudget + additionalCosts

    let diff = Math.abs(totalBudget - budget)

    if (totalBudget > budget) {
        console.log(`${diff.toFixed(2)} leva needed.`);
    } else {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
        
    }

}
familyHoliday(["800.50", "8", "100", "2"]);
familyHoliday(["500", "7", "66", "15"]);