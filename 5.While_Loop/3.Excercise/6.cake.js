function cake(input) {
    let index = 0;
    let w = Number(input[index]);
    index++
    let l = Number(input[index]);
    index++
    let command = input[index]
    index++
    let cakeSize = w * l

    while (command !== "STOP") {
        let pieces = Number(command)
        cakeSize -= pieces

        if (cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
            break;
        }

        command = input[index];
        index++
    }
    if (command=="STOP"){
        console.log(`${cakeSize} pieces are left.`)
    }
    
}

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"
])

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
])