function footballLeague(input) {
    index = 0;
    let capacity = Number(input[index]);
    index++
    let numFans = Number(input[index]);
    index++
    let fansA = 0
    let fansB = 0
    let fansV = 0
    let fansG = 0

    for (let i = 0; i < numFans; i++) {
        let sector = input[index];
        index++

        if (sector === "A") {
            fansA++
        } else if (sector === "B") {
            fansB++
        } else if (sector === "V") {
            fansV++
        } else if (sector === "G") {
            fansG++
        }
    }
    
        console.log(`${(fansA / numFans * 100).toFixed(2)}%`);
        console.log(`${(fansB / numFans * 100).toFixed(2)}%`);
        console.log(`${(fansV / numFans * 100).toFixed(2)}%`);
        console.log(`${(fansG / numFans * 100).toFixed(2)}%`);
        console.log(`${((numFans / capacity) * 100).toFixed(2)}%`)
}

footballLeague([76, 10, "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"])