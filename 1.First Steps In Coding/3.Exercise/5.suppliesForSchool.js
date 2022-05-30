function suppliesForSchool (input){
    let packPens=Number(input[0]);
    let packMarkers=Number(input[1]);
    let liters=Number(input[2]);
    let discount=Number(input[3]);

    let totalPricePens=5.8*packPens;
    let totalPriceMarkers=7.2*packMarkers;
    let totalPriceliters=1.2*liters;

    let neededMoney=totalPriceMarkers+totalPricePens+totalPriceliters
    let discountPrice=neededMoney*discount/100
    let result = neededMoney-discountPrice
    console.log(result);
}

suppliesForSchool (["2 ","3 ","4 ","25 "])
suppliesForSchool (["4 ","2 ","5 ","13 "])