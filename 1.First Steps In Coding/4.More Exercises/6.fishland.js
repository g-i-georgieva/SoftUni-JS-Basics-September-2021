function solve (input){
    let priceМackerel=Number(input[0]);
    let priceToy=Number(input[1]);
    let kgPalamud=Number(input[2]);
    let kgScad=Number(input[3]);
    let kgMidi=Number(input[4]);

    let pricePalamud=(priceМackerel+(priceМackerel*0.60))*kgPalamud
    let priceScad=(priceToy+(priceToy*0.80))*kgScad
    let priceMidi=kgMidi*7.50

    let finalPrice=pricePalamud+priceScad+priceMidi

    console.log(finalPrice.toFixed(2));
}

solve ([6.90, 4.20, 1.5, 2.5, 1])
solve ([5.55, 3.57, 4.3, 3.6, 7])