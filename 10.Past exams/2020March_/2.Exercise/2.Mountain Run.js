function mountainRun(input) {
    let recodSec = Number(input[0]);
    let distanceMetres = Number(input[1]);
    let timeSecFor1Meter = Number(input[2]);

    let distanceTime = distanceMetres * timeSecFor1Meter;
    let slower = Math.floor((distanceMetres / 50)) * 30
    let totalSec=distanceTime+slower

    if (totalSec>=recodSec){
        console.log (`No! He was ${(totalSec-recodSec).toFixed(2)} seconds slower.`)
    }else {
        console.log (`Yes! The new record is ${totalSec.toFixed(2)} seconds.`)
    }
}
mountainRun([1377,389,3])