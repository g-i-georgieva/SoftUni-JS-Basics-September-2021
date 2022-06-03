function worldSwimmingRecord(input) {
    let worldRecordSec = Number(input[0]);
    let distanceInMetres = Number(input[1]);
    let timeInSecondsFor1Meter = Number(input[2]);

    let swimDistance = distanceInMetres * timeInSecondsFor1Meter;
    let additionlSeconds = Math.floor(distanceInMetres / 15) * 12.5
    let finalDistance = swimDistance + additionlSeconds

    if (finalDistance < worldRecordSec) {
        console.log(`Yes, he succeeded! The new world record is ${(finalDistance).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(finalDistance-worldRecordSec).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["55555.67","3017","5.03"])