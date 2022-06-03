function lunchBreak (input){
    let tvShow=input[0];
    let duration=Number(input[1])
    let breakDuration=Number(input[2])

    let lunchTime=breakDuration/8
    let restTime=breakDuration/4
    let timeLeft=breakDuration-lunchTime-restTime

    if (timeLeft>=duration){
        console.log(`You have enough time to watch ${tvShow} and left with ${Math.ceil(timeLeft-duration)} minutes free time.`);
    }else {
        console.log(`You don't have enough time to watch ${tvShow}, you need ${Math.ceil(duration-timeLeft)} more minutes.`);
    }
}

lunchBreak (["Game of Thrones",
"60",
"96"])
lunchBreak (["Teen Wolf",
"48",
"60"])
