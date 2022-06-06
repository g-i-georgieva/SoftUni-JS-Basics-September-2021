function newHOuse (input){
    let typeFlower=input[0];
    let numFlowers=Number(input[1]);
    let budget = Number(input[2]);
    let moneyForFlowers=0

    if (typeFlower=="Roses"){
        moneyForFlowers=5*numFlowers
        if (numFlowers>80){
            moneyForFlowers=moneyForFlowers-(moneyForFlowers*0.10);
        }
    }else if (typeFlower=="Dahlias"){
        moneyForFlowers=3.8*numFlowers
        if (numFlowers>90){
            moneyForFlowers=moneyForFlowers-(moneyForFlowers*0.15);
        }
    }else if (typeFlower=="Tulips"){
        moneyForFlowers=2.8*numFlowers
        if (numFlowers>80){
            moneyForFlowers=moneyForFlowers-(moneyForFlowers*0.15);
        }
    }else if (typeFlower=="Narcissus"){
        moneyForFlowers=3*numFlowers
        if (numFlowers<120){
            moneyForFlowers=moneyForFlowers+(moneyForFlowers*0.15);
        }
    }else if (typeFlower=="Gladiolus"){
        moneyForFlowers=2.5*numFlowers
        if (numFlowers<80){
            moneyForFlowers=moneyForFlowers+(moneyForFlowers*0.20);
        }
    }
    if (moneyForFlowers<=budget){
        console.log(`Hey, you have a great garden with ${numFlowers} ${typeFlower} and ${(budget-moneyForFlowers).toFixed(2)} leva left.`);
    }else {
        console.log(`Not enough money, you need ${(moneyForFlowers-budget).toFixed(2)} leva more.`);
    }
}
newHOuse (["Tulips",
"88",
"260"])
newHOuse (["Narcissus",
"119",
"360"])

