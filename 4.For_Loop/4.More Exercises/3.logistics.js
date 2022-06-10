function logistics(input) {
    index = 0;
    let numCargos = Number(input[index]);
    index++
    let priceBus = 0;
    let priceTruck = 0;
    let priceTrain = 0
    let totalCargoWeght = 0
    let totalPrice = 0
    let cargoBus=0
    let cargoTruck=0
    let cargoTrain=0

    for (let i = 0; i < numCargos; i++) {
        let cargoWeight = Number(input[index]);
        index++

        if (cargoWeight <= 3) {
            cargoBus+=cargoWeight
            priceBus += cargoWeight * 200
            totalCargoWeght += cargoWeight
        } else if (cargoWeight >= 4 && cargoWeight <= 11) {
            cargoTruck+=cargoWeight
            priceTruck += cargoWeight * 175
            totalCargoWeght += cargoWeight
        } else {
            cargoTrain+=cargoWeight
            priceTrain += cargoWeight * 120
            totalCargoWeght += cargoWeight
        }

    }
    totalPrice = priceTrain + priceTruck + priceBus

    console.log((totalPrice / totalCargoWeght).toFixed(2));
    console.log(`${(cargoBus/totalCargoWeght*100).toFixed(2)}%`)
    console.log(`${(cargoTruck/totalCargoWeght*100).toFixed(2)}%`)
    console.log(`${(cargoTrain/totalCargoWeght*100).toFixed(2)}%`)

}

logistics([4, 1, 5, 16, 3])