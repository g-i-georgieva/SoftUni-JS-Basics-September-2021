function sumOfSeconds (input){
    let first=Number(input[0])
    let second=Number(input[1])
    let third=Number(input[2])
    let totalTime=first+second+third

    let minutes=Math.floor(totalTime/60);
    let seconds=totalTime%60

    if (seconds<10){
        console.log(`${minutes}:0${seconds}`);
    }else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumOfSeconds (["35",
"45",
"44"])
sumOfSeconds (["22", "7", 
"34"])
sumOfSeconds (["50",
"50",
"49"])

sumOfSeconds (["14", "12",
"10"])
