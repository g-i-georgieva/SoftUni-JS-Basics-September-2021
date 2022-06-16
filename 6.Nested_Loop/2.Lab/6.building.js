function building(input) {
    let numFloors = Number(input[0]);
    let numRooms = Number(input[1]);

    for (let f = numFloors; f >= 1; f--) {
        let floor = ""
        for (let r = 0; r < numRooms; r++) {
            if (f === numFloors) {
                floor += `L${f}${r} `
            }else if (f%2===0){
                floor+= `O${f}${r} `
            }else {
                floor+= `A${f}${r} `
            }
        }
        console.log(floor)
    }

}
building(["6", "4"])