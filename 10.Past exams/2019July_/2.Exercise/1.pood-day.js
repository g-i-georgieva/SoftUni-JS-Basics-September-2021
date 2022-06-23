function poolDay(input) {
    let numPeople = Number(input[0]);
    let taxEntrance = Number(input[1]);
    let priceBed = Number(input[2]);
    let priceUmbrella = Number(input[3]);

    let numUmbrella = Math.ceil(numPeople / 2);
    let numBed = Math.ceil(numPeople * 0.75);

    let totalPrice = numPeople*taxEntrance+numBed*priceBed+numUmbrella*priceUmbrella

    console.log (`${(totalPrice).toFixed(2)} lv.`)
}
poolDay([21, 5.50, 4.40, 6.20])