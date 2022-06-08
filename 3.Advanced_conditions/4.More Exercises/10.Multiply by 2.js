function multiplyBy2(input) {
    let index = 0
    let num = Number(input[index])
    index++

    while (num >= 0) {
        let currentNum = Number(num)
        console.log(`Result: ${(currentNum*2).toFixed(2)}`)

        num = Number(input[index]);
        index++
    }

    if (num<0){
        console.log (`Negative number!`)
    }
}
multiplyBy2([12, 43.2144, 12.3, 543.23, -20])