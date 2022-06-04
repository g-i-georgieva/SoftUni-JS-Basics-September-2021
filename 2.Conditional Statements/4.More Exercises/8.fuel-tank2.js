function fuelTank2(input) {
    let typeFuel = input[0];
    let fuelFill = Number(input[1]);
    let card = input[2];
    let priceperLiter = 0
    switch (typeFuel) {
        case "Diesel":
            priceperLiter = 2.33
            if (card === "Yes") {
                priceperLiter = priceperLiter - 0.12
            }
            break;
        case "Gasoline":
            priceperLiter = 2.22
            if (card === "Yes") {
                priceperLiter = priceperLiter - 0.18
            }
            break;
        case "Gas":
            priceperLiter = 0.93
            if (card === "Yes") {
                priceperLiter = priceperLiter - 0.08
            }
            break;
    }
    let totalPrice=priceperLiter*fuelFill;

    if (fuelFill >= 20 && fuelFill <= 25) {
        totalPrice=totalPrice*0.92
    } else if (fuelFill > 25) {
        totalPrice=totalPrice*0.90
    }

    console.log (`${totalPrice.toFixed(2)} lv.`)
}
fuelTank2(["Gasoline", 25, "No"])