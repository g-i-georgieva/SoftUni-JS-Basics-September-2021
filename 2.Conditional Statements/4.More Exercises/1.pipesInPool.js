function solve (input){
    let capacityPool= Number (input[0]);
    let firstPipe= Number (input[1]);
    let secondPipe=Number (input[2]);
    let hours=Number(input[3]);

    let litFirstPipe=hours*firstPipe;
    let litSecondPipe=hours*secondPipe

    let volumePool=litFirstPipe+litSecondPipe

    if (volumePool<=capacityPool){
        console.log(`The pool is ${(volumePool/capacityPool)*100}% full. Pipe 1: ${((litFirstPipe/volumePool)*100).toFixed(2)}%. Pipe 2: ${((litSecondPipe/volumePool)*100).toFixed(2)}%.`);
    }else {
        console.log(`For ${hours} hours the pool overflows with ${volumePool-capacityPool} liters.`);
    }
}

solve ([1000, 100, 120, 3])
