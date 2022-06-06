function summerOutfit(input) {
    let degrees = Number(input[0]);
    let partOfDay = input[1];
    let outfit = ""
    let shoes = ""

    if (degrees >= 10 && degrees <= 18) {
        if (partOfDay == "Morning") {
            outfit = "Sweatshirt"
            shoes = "Sneakers";
        } else if (partOfDay == "Afternoon") {
            outfit = "Shirt"
            shoes = "Moccasins";
        } else if (partOfDay = "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins";
        }
    } else if (degrees > 18 && degrees <= 24) {
        if (partOfDay == "Morning") {
            outfit = "Shirt"
            shoes = "Moccasins";
        } else if (partOfDay == "Afternoon") {
            outfit = "T-Shirt"
            shoes = "Sandals";
        } else if (partOfDay = "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins";
        }
    } else if (degrees >= 25) {
        if (partOfDay == "Morning") {
            outfit = "T-Shirt"
            shoes = "Sandals";
        } else if (partOfDay == "Afternoon") {
            outfit = "Swim Suit"
            shoes = "Barefoot";
        } else if (partOfDay = "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit (["16",
"Morning"])
summerOutfit (["22",
"Afternoon"])
summerOutfit (["28",
"Evening"])
