function yardGreening(input) {
    let squareMetresForGreening = input[0];
    let result = squareMetresForGreening * 7.61
    let discount = result * 0.18;
    let finalResult = result - discount

    console.log(`The final price is: ${finalResult} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);