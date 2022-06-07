function catToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let classCar = "";
    let typerCar = "";

    switch (season) {
        case "Summer":
            if (budget <= 100) {
                classCar = "Economy class";
                typerCar = "Cabrio"
                budget = budget * 0.35
            } else if (budget > 100 && budget <= 500) {
                classCar = "Compact class";
                typerCar = "Cabrio"
                budget = budget * 0.45
            } else if (budget > 500) {
                classCar = "Luxury class";
                typerCar = "Jeep"
                budget = budget * 0.90
            }
            break;
        case "Winter":
            if (budget <= 100) {
                classCar = "Economy class";
                typerCar = "Jeep"
                budget = budget * 0.65
            } else if (budget > 100 && budget <= 500) {
                classCar = "Compact class";
                typerCar = "Jeep"
                budget = budget * 0.80
            } else if (budget > 500) {
                classCar = "Luxury class";
                typerCar = "Jeep"
                budget = budget * 0.90
            }
            break;
    }
    console.log(classCar);
    console.log(`${typerCar} - ${(budget).toFixed(2)}`)
}
catToGo([450, "Summer"])