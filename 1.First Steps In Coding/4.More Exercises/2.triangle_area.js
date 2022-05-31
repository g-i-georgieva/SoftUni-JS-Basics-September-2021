function solve (input){
    let side = Number (input [0]);
    let high =Number (input [1]);

    let area = side * high/2

    console.log(area.toFixed(2));
}

solve ([20, 30])
solve ([15, 35])
solve ([7.75, 8.45])
solve ([1.23456, 4.56789])
