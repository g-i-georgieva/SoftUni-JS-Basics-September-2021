function onTimeForExam(input) {
    let hExam = Number(input[0]);
    let mExam = Number(input[1]);
    let hArrive = Number(input[2]);
    let mAarrive = Number(input[3]);

    let minutesExam = (hExam * 60) + mExam
    let minutesArrival = (hArrive * 60) + mAarrive

    if (minutesArrival > minutesExam) {
        console.log("Late");
        if (minutesArrival - minutesExam < 60) {
            console.log(`${minutesArrival-minutesExam} minutes after the start`);
        } else if (minutesArrival - minutesExam >= 60) {
            if ((minutesArrival - minutesExam) % 60 < 10) {
                console.log(`${Math.trunc((minutesArrival - minutesExam)/60)}:0${(minutesArrival - minutesExam)%60} hours after the start`);
            } else {
                console.log(`${Math.trunc((minutesArrival - minutesExam)/60)}:${(minutesArrival - minutesExam)%60} hours after the start`);
            }
        }
    } else if (minutesArrival < minutesExam) {
        if ((minutesExam - minutesArrival) < 60) {
            if ((minutesExam - minutesArrival) <= 30) {
                console.log("On time");
                console.log(`${minutesExam-minutesArrival} minutes before the start`);
            } else {
                console.log("Early");
                console.log(`${minutesExam-minutesArrival} minutes before the start`);
            }
        } else if ((minutesExam - minutesArrival) >= 60) {
            console.log("Early");
            if ((minutesExam - minutesArrival) % 60 < 10) {
                console.log(`${Math.trunc((minutesExam - minutesArrival)/60)}:0${(minutesExam - minutesArrival)%60} hours before the start`);
            } else {
                console.log(`${Math.trunc((minutesExam - minutesArrival)/60)}:${(minutesExam - minutesArrival)%60} hours before the start`);
            }
        }
    } else if (minutesArrival = minutesExam) {
        console.log("On time")
    }
}
onTimeForExam(["10",
    "00",
    "10",
    "00"
])
onTimeForExam(["9",
    "00",
    "8",
    "30"
])
onTimeForExam(["14",
    "00",
    "13",
    "55"
])
onTimeForExam(["11",
    "30",
    "10",
    "55"
])
onTimeForExam(["16",
    "00",
    "15",
    "00"
])
onTimeForExam(["11",
    "30",
    "8",
    "12"
])
onTimeForExam(["11",
    "30",
    "12",
    "29"
])