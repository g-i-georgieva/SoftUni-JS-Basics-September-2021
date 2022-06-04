function fuelTank(input) {
    let typeFuel = input[0];
    let currentFuelLitres = Number(input[1])

    switch (typeFuel) {
        case "Diesel":
            if (currentFuelLitres >= 25) {
                console.log(`You have enough diesel.`)
            } else {
                console.log(`Fill your tank with diesel!`)
            }
            break;
        case "Gasoline":
            if (currentFuelLitres >= 25) {
                console.log(`You have enough gasoline.`)
            } else {
                console.log(`Fill your tank with gasoline!`)
            }
            break;
        case "Gas":
            if (currentFuelLitres >= 25) {
                console.log(`You have enough gas.`)
            } else {
                console.log(`Fill your tank with gas!`)
            }
            break;
        default:
            console.log(`Invalid fuel!`)
            break;
    }

}
fuelTank(["Diesel", 10])