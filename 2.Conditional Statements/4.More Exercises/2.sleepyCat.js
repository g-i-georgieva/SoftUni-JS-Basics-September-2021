function solve (input){
    let freeDays=Number([input[0]]);

    let freeDaysPlay = freeDays*127;
    let workDaysPlay = (365-freeDays)*63

    let totalMinutesPlay = freeDaysPlay+workDaysPlay;

    let h = Math.abs(Math.trunc((totalMinutesPlay-30000)/60))
    let m = Math.abs((totalMinutesPlay-30000)%60)

    if (totalMinutesPlay>30000){
        console.log(`Tom will run away`);
        console.log(`${h} hours and ${m} minutes more for play`);
    }else {
        console.log(`Tom sleeps well`);
        console.log(`${h} hours and ${m} minutes less for play`);
    }
}
solve ([20]);
solve ([113])