function easterBakery (input){
    let priceFlour=Number (input[0])
    let kgFlour=Number(input[1]);
    let kgSugar = Number(input[2]);
    let numEggsPlate=Number(input[3]);
    let packsMaya=Number(input[4]);

    let priceSugar=priceFlour*0.75;
    let priceEggs=priceFlour*1.10;
    let priceMaya=priceSugar*0.20

    let result=priceSugar*kgSugar+priceFlour*kgFlour+priceMaya*packsMaya+priceEggs*numEggsPlate;
    console.log(result.toFixed(2))
}
easterBakery ([50,10,3.5,6,1])