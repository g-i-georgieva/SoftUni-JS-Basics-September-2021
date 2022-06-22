function easterGuests (input){
    let numGuests=Number (input[0]);
    let budget = Number (input[1]);

    let numKonsunak=Math.ceil(numGuests/3)
    let numEggs=numGuests*2

    let price = numEggs*0.45+numKonsunak*4

    if (price<=budget){
        console.log (`Lyubo bought ${numKonsunak} Easter bread and ${numEggs} eggs.`)
        console.log (`He has ${(budget-price).toFixed(2)} lv. left.`)
    }else {
        console.log (`Lyubo doesn't have enough money.`);
        console.log (`He needs ${(price-budget).toFixed(2)} lv. more.`)
    }
}
easterGuests ([10,35])