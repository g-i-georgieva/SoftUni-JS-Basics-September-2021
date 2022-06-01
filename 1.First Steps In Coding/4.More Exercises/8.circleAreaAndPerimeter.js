function solve (input){
    let r=Number(input[0]);

    let calculatedArea=Math.PI*r*r
    let calculatedParameter=2*Math.PI*r

    console.log(calculatedArea.toFixed(2));
    console.log(calculatedParameter.toFixed(2));
}

solve ([3]);
solve ([4.5])