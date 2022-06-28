function addBags(input) {
    let priceLaggageAbove20 = Number(input[0]);
    let laggageKg = Number(input[1]);
    let daysToTrip = Number(input[2]);
    let numLaggage = Number(input[3]);

    let priceForLaggage = 0

    if(laggageKg<10){
        priceForLaggage=priceLaggageAbove20*0.2
    }else if(laggageKg<=20){
        priceForLaggage=priceLaggageAbove20/2
    }else{
        priceForLaggage=priceLaggageAbove20
    }

    if (daysToTrip>30){
        priceForLaggage=priceForLaggage*1.1
    }else if (daysToTrip>=7){
        priceForLaggage=priceForLaggage*1.15
    }else {
        priceForLaggage=priceForLaggage*1.4
    }

    let totalPriceForLaggage=priceForLaggage*numLaggage
    console.log(`The total price of bags is: ${totalPriceForLaggage.toFixed(2)} lv.`);
}

addBags([30, 18, 15, 2])
addBags([25.5, 5, 36, 6])
addBags([63.8, 23, 3, 1])