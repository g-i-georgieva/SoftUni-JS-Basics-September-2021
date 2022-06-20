function spaseship(input) {
    let shipWidth = Number(input[0]);
    let shipLength = Number(input[1]);
    let shipHeight = Number(input[2]);
    let averageHightAstronavts = Number(input[3]);

    let shipVolume = shipHeight * shipLength * shipWidth;
    let cabinHeight = averageHightAstronavts + 0.40;

    let volumeCabin = cabinHeight * 2 * 2;

    let spacecraft = Math.floor(shipVolume / volumeCabin)

    if (spacecraft > 3 && spacecraft < 10) {
        console.log(`The spacecraft holds ${spacecraft} astronauts.`)
    } else if (spacecraft < 3) {
        console.log(`The spacecraft is too small.`)
    } else {
        console.log(`The spacecraft is too big.`)
    }

}
spaseship(["3.5",
    "4",
    "5",
    "1.70"
])
spaseship (["4.5",
"4.8",
"5",
"1.75"])
spaseship (["3",
"3", 
"4",
"1.68"])
