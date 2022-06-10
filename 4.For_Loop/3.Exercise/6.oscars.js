function solve(input) {
    index = 0
    let name = input[index]
    index++
    let points = Number(input[index])
    index++
    let jury = Number(input[index]);
    index++

    for (let i = 0; i < jury; i++) {
        let judge = input[index];
        index++
        let judgePoints = Number(input[index])
        index++
        points += (judgePoints * judge.length) / 2

        if (points>1250.5){
            console.log(`Congratulations, ${name} got a nominee for leading role with ${(points).toFixed(1)}!`);
            break;
        }
    }

    if (points<=1250.5){
        console.log(`Sorry, ${name} you need ${(1250.5-points).toFixed(1)} more!`);
    }
}
solve(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"
])

solve(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"
])