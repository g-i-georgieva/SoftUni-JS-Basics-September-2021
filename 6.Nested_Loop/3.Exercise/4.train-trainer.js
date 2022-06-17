function trainTrainers(input) {
    let index = 0
    let people = Number(input[index]);
    index++
    let command = input[index];
    index++
    let sumOfGrade = 0
    let counter=0

    while (command !== 'Finish') {
        let name = command;
        let tempSumOfGrade = 0;

        for (let i = 0; i < people; i++) {
            counter ++
            let grade = Number(input[index]);
            index++
            tempSumOfGrade += grade;
            sumOfGrade+=grade
        }
        let avgTempGrade = tempSumOfGrade / people

        console.log(`${name} - ${avgTempGrade.toFixed(2)}.`)
        command=input[index];
        index++
    }
    let  avgGrade=sumOfGrade/counter
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)
}
trainTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"
])
trainTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"
])
trainTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"
])