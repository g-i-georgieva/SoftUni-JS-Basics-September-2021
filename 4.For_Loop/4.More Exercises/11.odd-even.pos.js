function oddEvenPosition(input) {
    let index = 0;
    let nums = Number(input[index]);
    index++;
    let counter = 0;
    let oddSum = 0;
    let evenSum = 0;
    let maxOdd = Number.MIN_SAFE_INTEGER;
    let minOdd = Number.MAX_SAFE_INTEGER;
    let maxEven = Number.MIN_SAFE_INTEGER;
    let minEven = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums; i++) {
        let currentNum = Number(input[index]);
        index++;
        counter++
        if (counter % 2 === 0) {
            evenSum += currentNum
            if (currentNum > maxEven) {
                maxEven = currentNum
            }

            if (currentNum < minEven) {
                minEven = currentNum
            }
        } else {
            oddSum += currentNum
            if (currentNum > maxOdd) {
                maxOdd = currentNum
            }
            if (currentNum < minOdd) {
                minOdd = currentNum
            }
        }
    }

    if (nums >= 2) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${minOdd.toFixed(2)},`);
        console.log(`OddMax=${maxOdd.toFixed(2)},`);
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=${minEven.toFixed(2)},`);
        console.log(`EvenMax=${maxEven.toFixed(2)}`);
    } else if (nums === 0) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    } else if (nums === 1 ){
            console.log(`OddSum=${oddSum.toFixed(2)},`);
            console.log(`OddMin=${minOdd.toFixed(2)},`);
            console.log(`OddMax=${maxOdd.toFixed(2)},`);
            console.log(`EvenSum=${evenSum.toFixed(2)},`);
            console.log(`EvenMin=No,`);
            console.log(`EvenMax=No`);
        }


    }
    oddEvenPosition([0])