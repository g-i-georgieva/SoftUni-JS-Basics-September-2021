function schoolCamp(input) {
    let season = input[0];
    let typeGrou = input[1]
    let numStudents = Number(input[2]);
    let numNights = Number(input[3]);
    let priceNight = 0;
    let sport = "";

    switch (season) {
        case "Winter":
            if (typeGrou === "girls") {
                priceNight = 9.60
                sport = "Gymnastics"
            } else if (typeGrou === "boys") {
                priceNight = 9.60
                sport = "Judo"
            } else {
                priceNight = 10
                sport = "Ski"
            }
            break;
        case "Spring":
            if (typeGrou === "girls") {
                priceNight = 7.20
                sport = "Athletics"
            } else if (typeGrou === "boys") {
                priceNight = 7.20
                sport = "Tennis"
            } else {
                priceNight = 9.50
                sport = "Cycling"
            }
            break;
        case "Summer":
            if (typeGrou === "girls") {
                priceNight = 15
                sport = "Volleyball"
            } else if (typeGrou === "boys") {
                priceNight = 15
                sport = "Football"
            } else {
                priceNight = 20
                sport = "Swimming"
            }
            break;
    }

    let totalPrice = priceNight * numNights * numStudents

    if (numStudents >= 50) {
        totalPrice = totalPrice * 0.50
    } else if (numStudents >= 20 && numStudents < 50){
        totalPrice=totalPrice*0.85
    }else if (numStudents>=10&&numStudents<20){
        totalPrice=totalPrice*0.95
    }

    console.log(`${sport} ${totalPrice.toFixed(2)} lv.`)
}
schoolCamp(["Spring", "girls", 20, 7])