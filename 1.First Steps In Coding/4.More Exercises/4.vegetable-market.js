function solve (input){
    let priceVeg=Number(input[0]);
    let priceFruit=Number(input[1]);
    let kgveg=Number (input[2]);
    let kgFruit=Number(input[3]);

    let receivedMoney = (priceFruit*kgFruit+priceVeg*kgveg)/1.94

    console.log(receivedMoney.toFixed(2));
}

solve ([0.194, 19.4, 10, 10]);
solve ([1.5, 2.5, 10, 10])