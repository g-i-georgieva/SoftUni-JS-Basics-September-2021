function petShop (input){
    let dogsFood=input[0];
    let catsFood=input[1];
    let result =dogsFood*2.5+catsFood*4

    console.log(`${result} lv.`);
}

petShop (["5", "4"])
petShop (["13", "9"])