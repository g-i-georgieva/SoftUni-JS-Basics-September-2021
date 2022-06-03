function godzillaVsKong (input){
    let budget = Number(input[0]);
    let numberExtras = Number(input[1]);
    let priceClothesPerExtra = Number (input[2]);
    let decor=budget*0.10;
    let priceClothes = numberExtras*priceClothesPerExtra

    if (numberExtras>150){
        priceClothes=priceClothes-(priceClothes*0.10)
    }

    let costs=decor+priceClothes
    if (costs>budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(costs-budget).toFixed(2)} leva more.`);
    }else {
        console.log("Action!" );
        console.log(`Wingard starts filming with ${(budget-costs).toFixed(2)} leva left.`);
    }
}

godzillaVsKong (["20000","120","55.5"])
godzillaVsKong (["15437.62",
"186",
"57.99"])
godzillaVsKong (["9587.88",
"222",
"55.68"])
