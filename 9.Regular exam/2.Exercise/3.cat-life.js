function catLife(input) {
    let breed = input[0];
    let gender = input[1];

    let humanYears = 0;

    if (gender === "m") {
        if (breed === "British Shorthair") {
            humanYears = 13
        } else if (breed === "Siamese") {
            humanYears = 15
        } else if (breed === "Persian") {
            humanYears = 14
        } else if (breed === "Ragdoll") {
            humanYears = 16
        } else if (breed === "American Shorthair") {
            humanYears = 12
        } else if (breed === "Siberian") {
            humanYears = 11
        } else {
            console.log(`${breed} is invalid cat!`);
        }
    } else if (gender == "f") {
        if (breed == "British Shorthair") {
            humanYears = 14
        } else if (breed == "Siamese") {
            humanYears = 16
        } else if (breed == "Persian") {
            humanYears = 15
        } else if (breed == "Ragdoll") {
            humanYears = 17
        } else if (breed == "American Shorthair") {
            humanYears = 13
        } else if (breed == "Siberian") {
            humanYears = 12
        } else {
            console.log(`${breed} is invalid cat!`);
        }
    } else {
        console.log("Invalid dog breed!")
    }

    let catMonths = humanYears * 12 / 6
    if (catMonths > 0) {
        console.log(`${catMonths} cat months`)
    }

}

catLife(["Persian",
    "m"
])
catLife(["Siamese",
    "f"
])
catLife(["Siberian",
    "m"
])
catLife(["Ragdoll",
    "f"
])
catLife(["Tom",
    "m"
])