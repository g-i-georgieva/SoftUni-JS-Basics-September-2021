function solve (input){
    let celsius = Number (input [0]);
    let fahrenheit = celsius * 1.8 + 32;

    console.log(fahrenheit.toFixed(2));
}

solve(25)
solve(0)
solve(-5)