function trekkingMania(input) {
    let index = 0
    let numGroups = Number(input[index]);
    index++
    let groupMusala = 0
    let gropuMonblan = 0
    let groupKiliman = 0;
    let groupK2 = 0
    let groupEverest = 0
    let totalPeople = 0

    for (let i = 0; i < numGroups; i++) {
        let currentGropu = Number(input[index]);
        index++

        if (currentGropu <= 5) {
            groupMusala += currentGropu
            totalPeople += currentGropu
        } else if (currentGropu >= 6 && currentGropu <= 12) {
            totalPeople += currentGropu
            gropuMonblan += currentGropu
        } else if (currentGropu >= 13 && currentGropu <= 25) {
            totalPeople += currentGropu
            groupKiliman += currentGropu
        } else if (currentGropu >= 25 && currentGropu <= 40) {
            totalPeople += currentGropu
            groupK2 += currentGropu
        } else {
            totalPeople += currentGropu
            groupEverest += currentGropu
        }

    }

    console.log(`${((groupMusala / totalPeople) * 100).toFixed(2)}%`)
    console.log(`${((gropuMonblan / totalPeople) * 100).toFixed(2)}%`)
    console.log(`${((groupKiliman / totalPeople) * 100).toFixed(2)}%`)
    console.log(`${((groupK2/ totalPeople) * 100).toFixed(2)}%`)
    console.log(`${((groupEverest / totalPeople) * 100).toFixed(2)}%`)

}
trekkingMania([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78])