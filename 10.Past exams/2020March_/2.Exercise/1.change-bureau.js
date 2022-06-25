function changeBureau(input) {
    let bitcoin = Number(input[0]);
    let uan = Number(input[1]);
    let comission = Number(input[2]);

    let leva = bitcoin * 1168;
    let dollar = uan * 0.15;
    let totalLeva = leva + dollar * 1.76;
    let euro = totalLeva / 1.95;

    let budget = euro * (100 - comission) / 100

    console.log (budget.toFixed(2))
}
changeBureau ([1,5,5])