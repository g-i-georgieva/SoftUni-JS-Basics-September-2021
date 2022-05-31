function solve (input){
    let w=Number(input[0]);
    let h=Number(input[1]);

    let wcm=w*100;
    let hcm=h*100 - 100

    let placeH=Math.trunc(hcm/70)
    let placeW=Math.trunc(wcm/120)

    let totalPlaces=placeH*placeW-3
    console.log(totalPlaces);
}

solve ([15, 8.9])
solve ([8.4, 5.2])