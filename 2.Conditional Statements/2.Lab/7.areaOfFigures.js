function areaOfFigures (input){
    let figure = input[0];
    let sideA=Number(input[1]);
    let sideB=Number(input[2]);
    let result=0

    if (figure=="square"){
        result=sideA*sideA;
    }else if (figure=="rectangle"){
        result=sideA*sideB;
    }else if (figure=="circle"){
        result=Math.PI*sideA*sideA;
    }else if ("triangle"){
        result=sideA*sideB/2;
    }

    console.log(result.toFixed(3));
}

areaOfFigures (["square", "5"]);
areaOfFigures (["rectangle","7","2.5"]);
areaOfFigures (["circle","6"]);
areaOfFigures (["triangle","4.5","20"]);