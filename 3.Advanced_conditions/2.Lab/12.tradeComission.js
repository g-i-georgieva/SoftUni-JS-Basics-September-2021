function tradeComission (input){
    let city = input[0];
    let sales = Number(input[1]);
    comission=0

    if (sales>=0&&sales<=500){
        if (city=="Sofia"){
            comission=sales*0.05
        }else if (city=="Varna"){
            comission=sales*0.045
        }else if (city=="Plovdiv"){
            comission=sales*0.055
        }else {
            console.log("error");
        }
    }else if (sales>500&&sales<=1000){
        if (city=="Sofia"){
            comission=sales*0.07
        }else if (city=="Varna"){
            comission=sales*0.075
        }else if (city=="Plovdiv"){
            comission=sales*0.080
        }else {
            console.log("error");
        }
    }else if (sales>1000&&sales<=10000){
        if (city=="Sofia"){
            comission=sales*0.08
        }else if (city=="Varna"){
            comission=sales*0.1
        }else if (city=="Plovdiv"){
            comission=sales*0.12
        }else {
            console.log("error");
        }
    }else if (sales>10000){
        if (city=="Sofia"){
            comission=sales*0.12
        }else if (city=="Varna"){
            comission=sales*0.13
        }else if (city=="Plovdiv"){
            comission=sales*0.145
        }else {
            console.log("error");
        }
    }else {
        console.log("error");
    }
    if(comission>0){
        console.log(comission.toFixed(2));
    }

}

tradeComission (["Sofia",
"1500"])
tradeComission (["Plovdiv",
"499.99"])
tradeComission (["Varna",
"3874.50"])
tradeComission (["Kaspichan",
"-50"])
