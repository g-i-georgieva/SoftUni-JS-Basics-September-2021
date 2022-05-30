function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let totalHoursWork = Number(input[3])

    let priceNylon=(nylon+2)*1.5;
    let pricePaint=(paint+(paint*10/100))*14.50;
    let priceThinner=thinner*5
    let priceMaterials=priceNylon+pricePaint+priceThinner+0.40
    let priceWorkers=(priceMaterials*0.3)*totalHoursWork
    let totalSum=priceMaterials+priceWorkers

    console.log(totalSum);
}

repainting(["10", "11", "4", "8"])
repainting(["5", "10", "10", "1"])