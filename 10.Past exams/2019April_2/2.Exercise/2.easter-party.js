function easterParty(input) {
    let numGueasts = Number(input[0]);
    let pricePerPerson = Number(input[1]);
    let budgetDesi = Number(input[2]);

    if (numGueasts>=10&&numGueasts<=15){
        pricePerPerson=pricePerPerson*0.85
    }else if (numGueasts>15&&numGueasts<=20){
        pricePerPerson=pricePerPerson*0.8
    }else if (numGueasts>20){
        pricePerPerson=pricePerPerson*0.75
    }

    let sumParty=pricePerPerson*numGueasts
    let cakePrice=budgetDesi*0.10

    let totalPrice=sumParty+cakePrice

    if (totalPrice<=budgetDesi){
        console.log(`It is party time! ${(budgetDesi-totalPrice).toFixed(2)} leva left.`)
    }else {
        console.log(`No party! ${(totalPrice-budgetDesi).toFixed(2)} leva needed.`)
    }
}
easterParty([18, 30, 450])