function examPreparation(input) {
    let index = 0
    let badGrades = Number(input[index]);
    index++
    let count = 0
    let countBadGrades = 0
    let sumGrades = 0
    let lastTask = "";

    while (countBadGrades < badGrades) {
        let taskName = input[index];
        index++
        let taskGrade = Number(input[index])
        index++
        if (taskName === "Enough") {
            let aveRageGrade = sumGrades / count
            console.log(`Average score: ${aveRageGrade.toFixed(2)}`);
            console.log(`Number of problems: ${count}`);
            console.log(`Last problem: ${lastTask}`);
            break;
        }
        if (taskGrade <= 4) {
            countBadGrades++
        }

        lastTask = taskName
        sumGrades += taskGrade
        count++
    }
    if (countBadGrades === badGrades) {
        console.log(`You need a break, ${countBadGrades} poor grades.`);
    }
}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
])
examPreparation(["4", "Stone Age", "5", "Freedom", "5", "Storage", "3", "Enough"])