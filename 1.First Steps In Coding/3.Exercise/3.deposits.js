function calculatorDeposits (input){
    let depositSum=Number(input[0]);
    let depositTerm=Number(input[1]);
    let persentYearInterest=(Number(input[2]))/100;

    let result=depositSum+depositTerm*((depositSum*persentYearInterest)/12);

    console.log(result);
}

calculatorDeposits(["200","3","5.7"])
calculatorDeposits(["2350","6","7"])


