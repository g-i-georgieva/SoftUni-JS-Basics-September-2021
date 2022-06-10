function grades(input) {
    index = 0;
    let students = Number(input[index]);
    index++
    let top = 0;
    let between4And5 = 0
    let between3And4 = 0
    let fail = 0
    let totalGrade=0

    for (let i = 0; i < students; i++) {
        let grades = Number(input[index]);
        index++

        if (grades >= 5) {
            top++
            totalGrade+=grades
        } else if (grades >= 4 && grades <= 4.99) {
            between4And5++
            totalGrade+=grades
        } else if (grades >= 3 && grades <= 3.99) {
            between3And4++
            totalGrade+=grades
        } else if (grades < 3) {
            fail++
            totalGrade+=grades
        }
    }

    console.log(`Top students: ${(top/students*100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(between4And5/students*100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(between3And4/students*100).toFixed(2)}%`);
    console.log(`Fail: ${(fail/students*100).toFixed(2)}%`);
    console.log(`Average: ${(totalGrade/students).toFixed(2)}`);
}

grades([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5])
grades([6,2,3,4,5,6,2.2])