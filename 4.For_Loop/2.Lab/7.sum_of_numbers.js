function solve (input){
    let code = input[0]
    let sum=0
    for (let i = 0; i < code.length; i++) {
        let num=Number(code[i])
        sum+=num
        
    }
    console.log(`The sum of the digits is:${sum}`);
}

solve (["1234"])
solve (["564891"])