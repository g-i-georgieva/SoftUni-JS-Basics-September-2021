function gymnastic(input) {
    let country = input[0];
    let instrument = input[1];

    let grade = 0

    switch (country) {
        case "Russia":
            if (instrument === "ribbon") {
                grade = 9.1 + 9.4
            } else if (instrument === "hoop") {
                grade = 9.3 + 9.8
            }else {
                grade=9.6+9
            }
            break;
        case "Bulgaria":
            if (instrument === "ribbon") {
                grade = 9.6 + 9.4
            } else if (instrument === "hoop") {
                grade = 9.55 + 9.75
            }else {
                grade=9.5+9.4
            }
            break;
        case "Italy":
            if (instrument === "ribbon") {
                grade = 9.2 + 9.5
            } else if (instrument === "hoop") {
                grade = 9.45 + 9.35
            }else {
                grade=9.7+9.15
            }
            break;
    }

    console.log(`The team of ${country} get ${grade.toFixed(3)} on ${instrument}.`);
    let diff=20-grade
    let percent=diff/20*100

    console.log(`${percent.toFixed(2)}%`);
}
gymnastic(["Bulgaria", "ribbon"]);
gymnastic(["Russia", "rope"])