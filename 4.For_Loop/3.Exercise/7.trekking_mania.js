function trakkingMania(input) {
    index = 0;
    let groups = Number(input[index]);
    index++
    let totalpeople = 0
    let peopleMusala=0
    let peopleMonblan=0
    let peopleKilimand=0
    let peopleK2=0
    let peopleEverest=0

    for (let i = 0; i < groups; i++) {
        let group = Number(input[index]);
        index++
        totalpeople += group

        if (group <= 5) {
            peopleMusala+=group
        } else if (group >= 6 && group <= 12) {
            peopleMonblan+=group
        } else if (group >= 13 && group <= 25) {
            peopleKilimand+=group
        } else if (group >= 26 && group <= 40) {
            peopleK2+=group
        } else if (group >= 41) {
            peopleEverest+=group
        }
    }

    console.log(`${((peopleMusala/totalpeople)*100).toFixed(2)}%`);
    console.log(`${((peopleMonblan/totalpeople)*100).toFixed(2)}%`);
    console.log(`${((peopleKilimand/totalpeople)*100).toFixed(2)}%`);
    console.log(`${((peopleK2/totalpeople)*100).toFixed(2)}%`);
    console.log(`${((peopleEverest/totalpeople)*100).toFixed(2)}%`);
}

trakkingMania (["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
trakkingMania (["5",
"25",
"41",
"31",
"250",
"6"])

