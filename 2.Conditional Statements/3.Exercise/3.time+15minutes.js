function timePlus15Minutes(input) {
    let hour = Number(input[0])
    let minutes = Number(input[1])

    let m = minutes + 15


    if (m >= 60 && hour<23) {
        hour += 1
        m=m%60 
    }else if (m>=60 && hour>=23){
        hour = 0
        m=m%60 
    }

    if (m<10){
        console.log(`${hour}:0${m}`);
    }else {
        console.log(`${hour}:${m}`);;
    }

}

timePlus15Minutes (["1", "46"])
timePlus15Minutes (["0", "01"])
timePlus15Minutes (["23", "59"])
timePlus15Minutes (["11", "08"])
timePlus15Minutes (["12", "49"])