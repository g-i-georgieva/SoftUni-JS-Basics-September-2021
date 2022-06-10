function gameOfIntervals(input) {
    index = 0;
    let moves = Number(input[index]);
    index++
    let totalSum = 0
    let between09 = 0
    let between1019 = 0
    let between2029 = 0
    let between3039 = 0
    let between4050 = 0
    let invalid = 0


    for (let i = 0; i < moves; i++) {
        let num = Number(input[index]);
        index++
        if (num >= 0 && num <= 9) {
            between09++
            totalSum += num * 0.2

        } else if (num >= 10 && num <= 19) {
            between1019++
            totalSum += num * 0.3

        } else if (num >= 20 && num <= 29) {
            totalSum += num * 0.40
            between2029++

        } else if (num >= 30 && num <= 39) {
            totalSum += 50
            between3039++

        } else if (num >= 40 && num <= 50) {
            totalSum += 100
            between4050++

        } else {
            totalSum=totalSum/2
            invalid++
        }
    }

    console.log(totalSum.toFixed(2));
    console.log(`From 0 to 9: ${((between09/moves)*100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((between1019/moves)*100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((between2029/moves)*100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((between3039/moves)*100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((between4050/moves)*100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((invalid/moves)*100).toFixed(2)}%`);

}
    gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20])