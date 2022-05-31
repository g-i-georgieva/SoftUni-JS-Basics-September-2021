function basketballEquipment (input){

    let taxPerYear=Number(input[0]);
    
    let snickers=taxPerYear-(taxPerYear*0.4);
    let outfit=snickers-(snickers*0.2);
    let ball=outfit/4;
    let accessories=ball/5

    let costs=taxPerYear+snickers+outfit+ball+accessories
    console.log(costs);

}

basketballEquipment (["365"]);
basketballEquipment (["550"])