function toyStore(input){
    let priceHoliday=Number(input[0]);
    let numberPuzzels=Number(input[1]);
    let numberDalls=Number(input[2]);
    let numberBears=Number(input[3]);
    let numberMinions=Number(input[4]);
    let numberTrucks=Number(input[5]);
    let earnedMoney=0;
    let numberToys=numberBears+numberDalls+numberPuzzels+numberTrucks+numberMinions
    let price = numberPuzzels*2.6+numberDalls*3+numberBears*4.1+numberMinions*8.2+numberTrucks*2
    let finalPrice=0

    if (numberToys>=50){
        finalPrice=price-(price*0.25)
        earnedMoney=finalPrice-(finalPrice*0.10)
    }else {
        finalPrice=price
        earnedMoney=finalPrice-(finalPrice*0.10)
    }

    if (earnedMoney>=priceHoliday){
        console.log(`Yes! ${(earnedMoney-priceHoliday).toFixed(2)} lv left.`);
    }else {
        console.log(`Not enough money! ${(priceHoliday-earnedMoney).toFixed(2)} lv needed.`);
    }
}

toyStore (["40.8",
"20",
"25",
"30",
"50",
"10"])
toyStore (["320",
"8",
"2",
"5",
"5",
"1"])
