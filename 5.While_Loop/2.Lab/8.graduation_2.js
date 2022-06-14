function graduation(input) {
    let name = input[0];
    let counterClasses = 0;
    let badGrade = 0;
    let sum = 0;
    let index = 0;

    while(counterClasses < 12){
        let currentGrade = Number(input[index]);

        if(currentGrade >= 4.00){
            sum += currentGrade;
            counterClasses++;
        } else {
            badGrade++;
            if(badGrade === 2) {
                console.log(`${name} has been excluded at ${counterClasses+1} grade`);
                break;
            }
        }
        index++
        currentGrade = input[index];
    }
    if (counterClasses === 12) {
        sum /= 12;
        console.log(`${name} graduated. Average grade: ${sum.toFixed(2)}`);
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
