function easterLunch (input){
    let numKozunaci=Number(input[0]);
    let numEggs=Number(input[1]);
    let kgKurabiiki=Number(input[2]);

    let priceKozunaci=numKozunaci*3.2;
    let priceEggs=numEggs*4.35;
    let priceKurabii=kgKurabiiki*5.40;
    let pricePaintEggs=12*numEggs*0.15

    let result=priceEggs+priceKozunaci+priceKurabii+pricePaintEggs

    console.log (result.toFixed(2))

}
easterLunch ([3,2,3])