function animalType(input) {
    let number = Number(input[0]);

    switch (number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break;
    }
}

animalType(["1"])
animalType(["2"])
animalType(["3"])
animalType(["4"])
animalType(["5"])
animalType(["6"])
animalType(["7"])
animalType(["-1"])