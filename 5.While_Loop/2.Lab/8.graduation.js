function graduation(input) {
    let name = input[0];
    let count = 0;
    let badGrade = 0
    let totalGrade = 0;
    let index = 0

    while (count < 12) {
        let currentGrade = Number(input[index])

        if (currentGrade >= 4.00) {
            totalGrade += currentGrade
            count++
        } else {
            badGrade++
            if (badGrade === 2) {
                console.log(`${name} has been excluded at ${count+1} grade`);
                break;
            }
        }
        index++
        currentGrade = input[index]
    }
    if (count == 12) {
        totalGrade /= 12
        console.log(`${name} graduated. Average grade: ${totalGrade.toFixed(2)}`);
    }

}
graduation (["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"
])