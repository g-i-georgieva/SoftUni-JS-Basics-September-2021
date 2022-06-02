function bonusScore (input){
    let startPoints=Number(input[0]);
    let bonus=Number(input[1]);
    let bonusPoints=0
    
    

    if (startPoints<=100){
        bonusPoints=5
    }else if (startPoints<1000){
        bonusPoints=startPoints*20/100;
    }else{
        bonusPoints=startPoints*10/100
    }

    if (startPoints%2==0){
        bonusPoints+=1
    }else if (startPoints%10==5){
        bonusPoints+=2
    }
    
    let result = startPoints+bonusPoints

    console.log(bonusPoints);
    console.log(result);

}

bonusScore (["20"])
bonusScore (["175"])
bonusScore (["2703"])
bonusScore (["15875"])