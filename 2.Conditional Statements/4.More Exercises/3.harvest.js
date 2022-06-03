function solve(input) {
    let sizeArea = Number(input[0]);
    let grapePerSquareMeter = Number(input[1]);
    let neededWine = Number(input[2]);
    let workers = Number(input[3]);

    let totalGrape=sizeArea*grapePerSquareMeter
    let grapeForWine = totalGrape * 0.40
    let wineLitres =grapeForWine/ 2.5

    if (wineLitres < neededWine) {
        console.log(`It will be a tough winter! More ${Math.floor(neededWine-wineLitres)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineLitres)} liters.`);
        console.log(`${Math.ceil(wineLitres-neededWine)} liters left -> ${Math.ceil((wineLitres-neededWine)/workers)} liters per person.`);
    }
}

solve([650, 2, 175, 3])
solve([1020, 1.5, 425, 4])