function foodDelivery(input){
    let chickenMenu=Number(input[0]);
    let fishMenu=Number(input[1]);
    let veganMenu=Number(input[2]);

    let priceChickenMenu=chickenMenu*10.35
    let priceFishMenu=fishMenu*12.40
    let priceVeganMenu=veganMenu*8.15
    let priceMenus=priceChickenMenu+priceFishMenu+priceVeganMenu
    let priceDesert=priceMenus*20/100
    let totalPrice=priceMenus+priceDesert+2.50
    console.log(totalPrice);
}

foodDelivery (["2","4","3"])
foodDelivery (["9","2","6"])